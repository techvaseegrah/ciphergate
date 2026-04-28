// backend/controllers/salaryController.js
const asyncHandler = require('express-async-handler');
const Worker = require('../models/Worker');
const Attendance = require('../models/Attendance');
const Holiday = require('../models/Holiday');
const Leave = require('../models/Leave');
const Settings = require('../models/Settings');
const DeveloperProject = require('../models/DeveloperProject');
const SalaryProject = require('../models/SalaryProject');
const { calculateWorkerProductivity } = require('../utils/productivityCalculator');

const giveBonus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { amount, fromDate, toDate } = req.body;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: 'Bonus amount must be a valid number' });
  }

  // Validate date range for calculating actual earned salary
  if (!fromDate || !toDate) {
    return res.status(400).json({ message: 'Date range (fromDate and toDate) is required for bonus calculation' });
  }

  const worker = await Worker.findById(id);
  if (!worker) {
    return res.status(404).json({ message: 'Worker not found' });
  }

  // Get attendance data for the specified period
  const attendanceData = await Attendance.find({
    worker: id,
    date: {
      $gte: new Date(fromDate),
      $lte: new Date(toDate)
    }
  });

  const leaveData = await Leave.find({
    worker: id,
    status: 'Approved'
  });

  const holidays = await Holiday.find({});
  const settings = await Settings.findOne({ subdomain: worker.subdomain });
  const batches = settings ? settings.batches : [];

  // Calculate worker productivity to get actual earned salary
  const productivityReport = calculateWorkerProductivity({
    worker,
    attendanceData,
    fromDate,
    toDate,
    options: {
      batches,
      holidays,
      permissionTimeMinutes: settings ? settings.permissionTimeMinutes : 15,
      deductSalary: settings ? settings.deductSalary : true,
      intervals: settings ? settings.intervals : []
    }
  });

  // Get the worker's actual earned salary from the report
  const actualEarnedSalary = productivityReport.summary.finalSalary || 0;
  const baseSalary = worker.salary || 0;

  // Calculate the new bonus logic:
  // 1. Subtract base salary from bonus amount
  // 2. Instead of paying full base salary, pay what they actually earned
  // 3. Add remaining bonus to their actual earnings
  const bonusAmount = Number(amount);
  const remainingBonus = Math.max(0, bonusAmount - baseSalary);
  const finalPayout = actualEarnedSalary + remainingBonus;

  // Store bonus information
  worker.bonuses.push({
    amount: bonusAmount,
    fromDate: new Date(fromDate),
    toDate: new Date(toDate)
  });

  // Update worker's final salary with the new calculation
  worker.finalSalary = finalPayout;
  await worker.save();

  res.status(200).json({
    message: 'Bonus calculated and added successfully',
    worker,
    calculationDetails: {
      baseSalary: baseSalary,
      bonusAmount: bonusAmount,
      actualEarnedSalary: actualEarnedSalary,
      remainingBonus: remainingBonus,
      finalPayout: finalPayout
    }
  });
});

const removeBonus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const worker = await Worker.findById(id);
  if (!worker) {
    return res.status(404).json({ message: 'Worker not found' });
  }

  // Reset the worker's final salary to their base salary
  worker.finalSalary = worker.salary;

  // Remove all bonuses
  worker.bonuses = [];

  await worker.save();

  res.status(200).json({
    message: 'Bonus removed successfully',
    worker
  });
});

const resetSalary = asyncHandler(async (req, res) => {
  const { subdomain } = req.body;

  if (!subdomain) {
    return res.status(400).json({ message: 'Subdomain is required' });
  }

  const workers = await Worker.find({ subdomain });

  if (workers.length === 0) {
    return res.status(404).json({ message: 'No workers found for this subdomain' });
  }

  const updatePromises = workers.map(worker => {
    worker.finalSalary = worker.salary;
    // Remove all bonuses when resetting salary
    worker.bonuses = [];
    return worker.save();
  });

  await Promise.all(updatePromises);

  res.status(200).json({ message: 'Salaries reset successfully', updatedCount: workers.length });
});

const getWorkerSalaryReport = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fromDate, toDate } = req.query;

  if (!fromDate || !toDate) {
    return res.status(400).json({ message: 'Start and end dates are required' });
  }

  try {
    // POPULATE DEPARTMENT AND INCLUDE FINES IN THE WORKER DATA
    const worker = await Worker.findById(id).populate('department').select('+fines');

    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }

    // Since the date field in Attendance model is stored as a string,
    // we need to fetch all attendance records and filter them manually
    const allAttendanceData = await Attendance.find({
      worker: id
    });

    // Filter attendance data manually by parsing the date strings
    const fromDateObj = new Date(fromDate);
    const toDateObj = new Date(toDate);

    const attendanceData = allAttendanceData.filter(record => {
      // Parse the string date from the record
      const recordDate = new Date(record.date);
      return recordDate >= fromDateObj && recordDate <= toDateObj;
    });

    const leaveData = await Leave.find({
      worker: id,
      $or: [
        { status: 'Approved' },
        { leaveType: 'Paid Leave' }
      ]
    });

    const holidays = await Holiday.find({});
    const settings = await Settings.findOne({ subdomain: worker.subdomain });
    const batches = settings ? settings.batches : [];

    // Calculate Company/Dept Attendance Penalties (Today's rate)
    let isCompanyPenalty = false;
    let isDeptPenalty = false;

    if (settings && settings.advancedLeaveDeduction && settings.advancedLeaveDeduction.attendanceRuleEnabled) {
      const adv = settings.advancedLeaveDeduction;
      const thresh = adv.thresholds || {};

      const now = new Date();
      const indiaTimezoneDate = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      const todayDateFormatted = indiaTimezoneDate.format(now);

      // Company Status
      if (thresh.company?.enabled ?? true) {
        const totalCompanyWorkers = await Worker.countDocuments({ subdomain: worker.subdomain, status: { $ne: 'Relieved' } });
        const presentCompanyWorkerIds = await Attendance.distinct('worker', { subdomain: worker.subdomain, date: todayDateFormatted, presence: true });
        const companyRate = totalCompanyWorkers > 0 ? (presentCompanyWorkerIds.length / totalCompanyWorkers) * 100 : 100;
        const companyVal = thresh.company?.value ?? thresh.company ?? 80;
        if (companyRate < companyVal) isCompanyPenalty = true;
      }

      // Dept Status
      if (thresh.department?.enabled ?? true) {
        const totalDeptWorkers = await Worker.countDocuments({ subdomain: worker.subdomain, department: worker.department?._id || worker.department, status: { $ne: 'Relieved' } });
        const presentDeptWorkerIds = await Attendance.distinct('worker', { subdomain: worker.subdomain, department: worker.department?._id || worker.department, date: todayDateFormatted, presence: true });
        const deptRate = totalDeptWorkers > 0 ? (presentDeptWorkerIds.length / totalDeptWorkers) * 100 : 100;
        const deptVal = thresh.department?.value ?? thresh.department ?? 80;
        if (deptRate < deptVal) isDeptPenalty = true;
      }
    }

    // FIXED THIS LINE: Pass the worker object to the calculator function
    // Fetch salary projects for this worker overlapping the report period
    const salaryProjects = await SalaryProject.find({
      subdomain: worker.subdomain,
      developers: id,
      $or: [{ startDate: { $lte: new Date(toDate) }, endDate: { $gte: new Date(fromDate) } }]
    }).populate('developers', 'name rfid');

    // Enrich projects with per-day value
    const enrichedProjects = salaryProjects.map(p => {
      const pObj = p.toObject();
      const devCount = pObj.developers.length || 1;
      const share = pObj.projectProfit / devCount;
      const start = new Date(pObj.startDate);
      const end = new Date(pObj.endDate);
      let workingDays = 0;
      const cur = new Date(start);
      while (cur <= end) {
        if (cur.getDay() !== 0) workingDays++;
        cur.setDate(cur.getDate() + 1);
      }
      return { ...pObj, perDeveloperShare: share, totalWorkingDays: workingDays, perDayValue: workingDays > 0 ? share / workingDays : 0 };
    });

    const report = calculateWorkerProductivity({
      worker, // ADDED: Pass the worker object
      attendanceData,
      fromDate,
      toDate,
      leaveData, // ADDED: Pass the leave data
      projects: enrichedProjects, // HYBRID: Pass salary projects
      options: {
        batches,
        holidays,
        permissionTimeMinutes: settings ? settings.permissionTimeMinutes : 15,
        deductSalary: settings ? settings.deductSalary : true,
        intervals: settings ? settings.intervals : [],
        advancedLeaveDeduction: settings ? settings.advancedLeaveDeduction : null,
        isCompanyPenalty,
        isDeptPenalty,
        includePermission: settings?.includePermission || false,
        paidLeaveConfig: settings ? settings.paidLeaveConfig : null
      }
    });

    // Check if there are any bonuses for this period
    const bonusesForPeriod = worker.bonuses.filter(bonus => {
      return (
        (new Date(bonus.fromDate) <= new Date(toDate)) &&
        (new Date(bonus.toDate) >= new Date(fromDate))
      );
    });

    // Calculate total bonus amount for this period
    const totalBonusAmount = bonusesForPeriod.reduce((total, bonus) => total + bonus.amount, 0);

    let finalSalaryWithBonus = report.summary.finalSalary || 0;
    if (totalBonusAmount > 0) {
      finalSalaryWithBonus = finalSalaryWithBonus + totalBonusAmount;
    }

    // ADD FINE CALCULATION FOR THE REPORT PERIOD
    // Calculate total fines for the report period
    let totalFinesAmount = 0;
    if (worker.fines && Array.isArray(worker.fines)) {
      const reportStartDate = new Date(fromDate);
      const reportEndDate = new Date(toDate);

      totalFinesAmount = worker.fines
        .filter(fine => {
          const fineDate = new Date(fine.date);
          return fineDate >= reportStartDate && fineDate <= reportEndDate;
        })
        .reduce((total, fine) => total + (fine.amount || 0), 0);
    }

    // Calculate final salary after deducting fines
    const finalSalaryWithFines = Math.max(0, finalSalaryWithBonus - totalFinesAmount);

    // Build project breakdown summary
    const projectBreakdown = enrichedProjects.map(p => {
      const pid = p._id.toString();
      const calcData = (report.summary?.projectBreakdownMap && report.summary.projectBreakdownMap[pid]) || { totalEarned: 0, totalDeduction: 0, daysCount: 0 };
      
      return {
        projectId: p._id,
        projectName: p.projectName,
        startDate: p.startDate,
        endDate: p.endDate,
        totalWorkingDays: p.totalWorkingDays,
        perDayValue: p.perDayValue,
        perDeveloperShare: p.perDeveloperShare,
        projectProfit: p.projectProfit,
        totalDeduction: calcData.totalDeduction,
        totalEarned: calcData.totalEarned,
        daysInReport: calcData.daysCount
      };
    });

    res.status(200).json({
      message: 'Salary report generated successfully',
      report,
      bonuses: bonusesForPeriod,
      totalBonusAmount: totalBonusAmount,
      totalFinesAmount: totalFinesAmount, // ADD THIS
      finalSalaryWithBonus: finalSalaryWithBonus,
      finalSalaryWithFines: finalSalaryWithFines, // ADD THIS
      projectBreakdown, // HYBRID
      worker: {
        name: worker.name,
        salary: worker.salary,
        finalSalary: worker.finalSalary,
        perDaySalary: worker.perDaySalary,
        fines: worker.fines // ADD THIS
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to generate salary report' });
  }
});

const getMySalaryReport = asyncHandler(async (req, res) => {
  const { fromDate, toDate } = req.query;
  const id = req.user._id;

  console.log('Generating salary report for worker:', id);

  // Calculate current month date range if not provided
  let start, end;
  if (!fromDate || !toDate) {
    const now = new Date();
    start = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    end = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
  } else {
    start = fromDate;
    end = toDate;
  }

  try {
    const worker = await Worker.findById(id).populate('department').select('+fines');

    if (!worker) {
      console.log('Worker not found:', id);
      return res.status(404).json({ message: 'Worker not found' });
    }

    const allAttendanceData = await Attendance.find({ worker: id });

    const fromDateObj = new Date(start);
    const toDateObj = new Date(end);

    const attendanceData = allAttendanceData.filter(record => {
      const recordDate = new Date(record.date);
      return recordDate >= fromDateObj && recordDate <= toDateObj;
    });

    const leaveData = await Leave.find({
      worker: id,
      $or: [
        { status: 'Approved' },
        { leaveType: 'Paid Leave' }
      ]
    });

    const holidays = await Holiday.find({});
    const settings = await Settings.findOne({ subdomain: worker.subdomain });
    const batches = settings ? settings.batches : [];

    // Calculate Company/Dept Attendance Penalties (Today's rate)
    let isCompanyPenalty = false;
    let isDeptPenalty = false;

    if (settings && settings.advancedLeaveDeduction && settings.advancedLeaveDeduction.attendanceRuleEnabled) {
      const adv = settings.advancedLeaveDeduction;
      const thresh = adv.thresholds || {};

      const now = new Date();
      const indiaTimezoneDate = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      const todayDateFormatted = indiaTimezoneDate.format(now);

      // Company Status
      if (thresh.company?.enabled ?? true) {
        const totalCompanyWorkers = await Worker.countDocuments({ subdomain: worker.subdomain, status: { $ne: 'Relieved' } });
        const presentCompanyWorkerIds = await Attendance.distinct('worker', { subdomain: worker.subdomain, date: todayDateFormatted, presence: true });
        const companyRate = totalCompanyWorkers > 0 ? (presentCompanyWorkerIds.length / totalCompanyWorkers) * 100 : 100;
        const companyVal = thresh.company?.value ?? thresh.company ?? 80;
        if (companyRate < companyVal) isCompanyPenalty = true;
      }

      // Dept Status
      if (thresh.department?.enabled ?? true) {
        const totalDeptWorkers = await Worker.countDocuments({ subdomain: worker.subdomain, department: worker.department?._id || worker.department, status: { $ne: 'Relieved' } });
        const presentDeptWorkerIds = await Attendance.distinct('worker', { subdomain: worker.subdomain, department: worker.department?._id || worker.department, date: todayDateFormatted, presence: true });
        const deptRate = totalDeptWorkers > 0 ? (presentDeptWorkerIds.length / totalDeptWorkers) * 100 : 100;
        const deptVal = thresh.department?.value ?? thresh.department ?? 80;
        if (deptRate < deptVal) isDeptPenalty = true;
      }
    }

    // Hybrid: Fetch and enrichment projects
    const salaryProjects = await SalaryProject.find({
      subdomain: worker.subdomain,
      developers: id,
      $or: [{ startDate: { $lte: new Date(end) }, endDate: { $gte: new Date(start) } }]
    }).populate('developers', 'name');

    const enrichedProjects = salaryProjects.map(p => {
      const pObj = p.toObject();
      const devCount = pObj.developers.length || 1;
      const share = pObj.projectProfit / devCount;
      const pStart = new Date(pObj.startDate);
      const pEnd = new Date(pObj.endDate);
      let workingDays = 0;
      const cur = new Date(pStart);
      while (cur <= pEnd) {
        if (cur.getDay() !== 0) workingDays++;
        cur.setDate(cur.getDate() + 1);
      }
      return { ...pObj, perDeveloperShare: share, totalWorkingDays: workingDays, perDayValue: workingDays > 0 ? share / workingDays : 0 };
    });

    const report = calculateWorkerProductivity({
      worker,
      attendanceData,
      fromDate: start,
      toDate: end,
      leaveData,
      projects: enrichedProjects, // Added projects
      options: {
        batches,
        holidays,
        permissionTimeMinutes: settings ? settings.permissionTimeMinutes : 15,
        deductSalary: settings ? settings.deductSalary : true,
        intervals: settings ? settings.intervals : [],
        advancedLeaveDeduction: settings ? settings.advancedLeaveDeduction : null,
        isCompanyPenalty,
        isDeptPenalty,
        includePermission: settings?.includePermission || false,
        paidLeaveConfig: settings ? settings.paidLeaveConfig : null
      }
    });

    const bonusesForPeriod = worker.bonuses.filter(bonus => {
      return (
        (new Date(bonus.fromDate) <= new Date(end)) &&
        (new Date(bonus.toDate) >= new Date(start))
      );
    });

    const totalBonusAmount = bonusesForPeriod.reduce((total, bonus) => total + bonus.amount, 0);
    let finalSalaryWithBonus = report.summary.finalSalary;

    if (totalBonusAmount > 0 && bonusesForPeriod.length > 0) {
      const bonus = bonusesForPeriod[0];
      const baseSalary = worker.salary || 0;
      const actualEarnedSalary = report.summary.finalSalary || 0;
      const remainingBonus = Math.max(0, bonus.amount - baseSalary);
      finalSalaryWithBonus = actualEarnedSalary + remainingBonus;
    }

    let totalFinesAmount = 0;
    if (worker.fines && Array.isArray(worker.fines)) {
      totalFinesAmount = worker.fines
        .filter(fine => {
          const fineDate = new Date(fine.date);
          return fineDate >= fromDateObj && fineDate <= toDateObj;
        })
        .reduce((total, fine) => total + (fine.amount || 0), 0);
    }

    const finalSalaryWithFines = Math.max(0, finalSalaryWithBonus - totalFinesAmount);

    // Build project breakdown summary
    const projectBreakdown = enrichedProjects.map(p => {
      const pid = p._id.toString();
      const calcData = (report.summary?.projectBreakdownMap && report.summary.projectBreakdownMap[pid]) || { totalEarned: 0, totalDeduction: 0, daysCount: 0 };
      
      return {
        projectId: p._id,
        projectName: p.projectName,
        startDate: p.startDate,
        endDate: p.endDate,
        totalWorkingDays: p.totalWorkingDays,
        perDayValue: p.perDayValue,
        perDeveloperShare: p.perDeveloperShare,
        projectProfit: p.projectProfit,
        totalDeduction: calcData.totalDeduction,
        totalEarned: calcData.totalEarned,
        daysInReport: calcData.daysCount
      };
    });

    const responseData = {
      message: 'Salary report generated successfully',
      baseSalary: worker.salary,
      finalSalary: finalSalaryWithFines,
      actualEarnedSalary: report.summary.finalSalary || 0,
      totalDeductions: (report.summary.totalSalaryDeduction || 0) + totalFinesAmount,
      report,
      bonuses: bonusesForPeriod,
      totalBonusAmount: totalBonusAmount,
      totalFinesAmount: totalFinesAmount,
      finalSalaryWithBonus: finalSalaryWithBonus,
      projectBreakdown, // Added breakdown
      worker: {
        name: worker.name,
        salary: worker.salary,
        finalSalary: worker.finalSalary,
        perDaySalary: worker.perDaySalary
      }
    };

    console.log('Salary API Response (Strict):', {
      baseSalary: responseData.baseSalary,
      finalSalary: responseData.finalSalary
    });
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Failed to generate salary report:', error);
    res.status(500).json({ message: 'Failed to generate salary report', error: error.message });
  }
});

// Get compensation report for all workers based on type and class
const getCompensationReport = asyncHandler(async (req, res) => {
  const { subdomain } = req.body;
  const { employeeType, class: classFilter } = req.query;

  try {
    let query = { subdomain };
    if (employeeType) query.employeeType = employeeType;
    if (classFilter) query.class = classFilter;

    const workers = await Worker.find(query)
      .select('name employeeType class salary finalSalary rfid department')
      .populate('department', 'name');

    // Calculate compensation details for each worker
    const compensationReport = workers.map(worker => {
      let calculatedSalary = worker.salary;
      if (worker.employeeType === 'developer') {
        // For developers, we would calculate based on project profit (this is a placeholder)
        // In a real implementation, this would involve calculating 60% of project profits
        calculatedSalary = worker.finalSalary; // Using finalSalary as placeholder
      }

      return {
        _id: worker._id,
        name: worker.name,
        employeeType: worker.employeeType,
        class: worker.class,
        baseSalary: worker.salary,
        calculatedSalary: calculatedSalary,
        finalSalary: worker.finalSalary,
        department: worker.department?.name || 'N/A',
        rfid: worker.rfid
      };
    });

    res.status(200).json({
      message: 'Compensation report generated successfully',
      report: compensationReport,
      totalWorkers: compensationReport.length,
      totalCompensation: compensationReport.reduce((sum, worker) => sum + worker.calculatedSalary, 0)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to generate compensation report' });
  }
});

// Add developer project
const addDeveloperProject = asyncHandler(async (req, res) => {
  const { developerId, projectName, projectAmount, projectDate, subdomain, baseSalary, actualSalary } = req.body;

  if (!developerId || !projectName || !projectAmount || !projectDate || !subdomain) {
    return res.status(400).json({ message: 'All fields are required: developerId, projectName, projectAmount, projectDate, subdomain' });
  }

  if (isNaN(parseFloat(projectAmount)) || parseFloat(projectAmount) <= 0) {
    return res.status(400).json({ message: 'Project amount must be a valid positive number' });
  }

  // Verify developer exists
  const developer = await Worker.findById(developerId);
  if (!developer) {
    return res.status(404).json({ message: 'Developer not found' });
  }

  const projectAmountNum = parseFloat(projectAmount);
  const developerEarnings = projectAmountNum * 0.6;

  // Calculate final profit sharing based on salary deductions
  let finalProfitSharing = developerEarnings;
  if (baseSalary && actualSalary) {
    const deductedAmount = parseFloat(baseSalary) - parseFloat(actualSalary);
    finalProfitSharing = developerEarnings - deductedAmount;
  }

  const project = new DeveloperProject({
    developerId,
    projectName,
    projectAmount: projectAmountNum,
    developerEarnings,
    projectDate: new Date(projectDate),
    subdomain,
    baseSalary: baseSalary ? parseFloat(baseSalary) : undefined,
    actualSalary: actualSalary ? parseFloat(actualSalary) : undefined
  });

  await project.save();

  res.status(201).json({
    message: 'Developer project added successfully',
    project,
    calculationDetails: {
      projectAmount: projectAmountNum,
      sixtyPercentProfit: developerEarnings,
      baseSalary: baseSalary ? parseFloat(baseSalary) : 0,
      actualSalary: actualSalary ? parseFloat(actualSalary) : 0,
      deductedAmount: baseSalary && actualSalary ? parseFloat(baseSalary) - parseFloat(actualSalary) : 0,
      finalProfitSharing: finalProfitSharing
    }
  });
});

// Get developer projects by developer ID
const getDeveloperProjects = asyncHandler(async (req, res) => {
  const { developerId } = req.params;
  const { subdomain, month, year } = req.query;

  if (!developerId) {
    return res.status(400).json({ message: 'Developer ID is required' });
  }

  let query = { developerId };
  if (subdomain) {
    query.subdomain = subdomain;
  }

  // If month and year are provided, filter by that month/year
  if (month && year) {
    const startDate = new Date(year, parseInt(month) - 1, 1);
    const endDate = new Date(year, parseInt(month), 1);

    query.projectDate = {
      $gte: startDate,
      $lt: endDate
    };
  }

  const projects = await DeveloperProject.find(query).sort({ createdAt: -1 });

  // Calculate totals with profit sharing logic
  let totalEarnings = 0;
  let totalProjects = projects.length;
  let totalFinalProfitSharing = 0;

  projects.forEach(project => {
    totalEarnings += project.developerEarnings;

    // Calculate final profit sharing for each project
    let finalProfitSharing = project.developerEarnings;
    if (project.baseSalary && project.actualSalary) {
      const deductedAmount = project.baseSalary - project.actualSalary;
      finalProfitSharing = project.developerEarnings - deductedAmount;
    }
    totalFinalProfitSharing += finalProfitSharing;
  });

  res.status(200).json({
    projects,
    totalEarnings,
    totalFinalProfitSharing,
    totalProjects
  });
});

// Delete developer project
const deleteDeveloperProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const project = await DeveloperProject.findByIdAndDelete(id);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.status(200).json({
    message: 'Project deleted successfully'
  });
});

// Get all developer projects summary for a subdomain
const getAllDeveloperProjectsSummary = asyncHandler(async (req, res) => {
  const { subdomain, month, year } = req.query; // Added month and year parameters for filtering

  if (!subdomain) {
    return res.status(400).json({ message: 'Subdomain is required' });
  }

  // Build query with optional month/year filtering
  let query = { subdomain };
  if (month && year) {
    // Filter by specific month and year
    const startDate = new Date(year, parseInt(month) - 1, 1); // month is 1-indexed
    const endDate = new Date(year, parseInt(month), 1); // Next month start

    query.projectDate = {
      $gte: startDate,
      $lt: endDate
    };
  }

  const projects = await DeveloperProject.find(query).populate('developerId', 'name salary');

  // Group projects by developer
  const projectsByDeveloper = {};
  projects.forEach(project => {
    const developerId = project.developerId._id.toString();
    if (!projectsByDeveloper[developerId]) {
      projectsByDeveloper[developerId] = {
        developer: project.developerId,
        projects: [],
        totalEarnings: 0,
        totalFinalProfitSharing: 0, // New field for calculated profit sharing
        totalProjects: 0,
        totalBaseSalary: 0,
        totalActualSalary: 0,
        totalDeductedAmount: 0
      };
    }

    projectsByDeveloper[developerId].projects.push(project);
    projectsByDeveloper[developerId].totalEarnings += project.developerEarnings;

    // Calculate final profit sharing for this project
    let finalProfitSharing = project.developerEarnings;
    if (project.baseSalary && project.actualSalary) {
      const deductedAmount = project.baseSalary - project.actualSalary;
      finalProfitSharing = project.developerEarnings - deductedAmount;
      projectsByDeveloper[developerId].totalDeductedAmount += deductedAmount;
      projectsByDeveloper[developerId].totalBaseSalary += project.baseSalary;
      projectsByDeveloper[developerId].totalActualSalary += project.actualSalary;
    }
    projectsByDeveloper[developerId].totalFinalProfitSharing += finalProfitSharing;

    projectsByDeveloper[developerId].totalProjects += 1;
  });

  // Convert to array format
  const developerSummaries = Object.values(projectsByDeveloper);

  // Calculate overall totals
  const overallTotalEarnings = developerSummaries.reduce((sum, dev) => sum + dev.totalEarnings, 0);
  const overallTotalFinalProfitSharing = developerSummaries.reduce((sum, dev) => sum + dev.totalFinalProfitSharing, 0);
  const overallTotalProjects = developerSummaries.reduce((sum, dev) => sum + dev.totalProjects, 0);
  const overallTotalBaseSalary = developerSummaries.reduce((sum, dev) => sum + dev.totalBaseSalary, 0);
  const overallTotalActualSalary = developerSummaries.reduce((sum, dev) => sum + dev.totalActualSalary, 0);
  const overallTotalDeductedAmount = developerSummaries.reduce((sum, dev) => sum + dev.totalDeductedAmount, 0);

  res.status(200).json({
    developerSummaries,
    overallTotalEarnings,
    overallTotalFinalProfitSharing,
    overallTotalProjects,
    overallTotalBaseSalary,
    overallTotalActualSalary,
    overallTotalDeductedAmount,
    totalDevelopers: developerSummaries.length,
    filter: { subdomain, month, year } // Include filter info in response
  });
});

// ─── SalaryProject (Hybrid System) CRUD ───────────────────────────────────────

// Create a new salary project
const createSalaryProject = asyncHandler(async (req, res) => {
  const { projectName, projectAmount, profitPercentage, developers, startDate, endDate, subdomain } = req.body;

  if (!projectName || !projectAmount || !startDate || !endDate || !subdomain) {
    return res.status(400).json({ message: 'projectName, projectAmount, startDate, endDate, subdomain are required' });
  }

  if (new Date(startDate) > new Date(endDate)) {
    return res.status(400).json({ message: 'startDate must be before or equal to endDate' });
  }

  const project = new SalaryProject({
    projectName,
    projectAmount: parseFloat(projectAmount),
    profitPercentage: parseFloat(profitPercentage || 60),
    developers: developers || [],
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    subdomain
  });

  await project.save();
  const populated = await SalaryProject.findById(project._id).populate('developers', 'name rfid department');

  res.status(201).json({ message: 'Salary project created', project: populated });
});

// Get all salary projects for a subdomain (with optional month/year filter)
const getSalaryProjects = asyncHandler(async (req, res) => {
  const { subdomain, month, year } = req.query;

  if (!subdomain) return res.status(400).json({ message: 'subdomain is required' });

  let query = { subdomain };

  if (month && year) {
    const startOfMonth = new Date(parseInt(year), parseInt(month) - 1, 1);
    const endOfMonth = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59);
    // Projects that overlap with this month
    query.$or = [
      { startDate: { $lte: endOfMonth }, endDate: { $gte: startOfMonth } }
    ];
  }

  const projects = await SalaryProject.find(query)
    .populate('developers', 'name rfid department')
    .sort({ startDate: -1 });

  res.status(200).json({ projects });
});

// Get salary projects for a specific worker within a date range
const getSalaryProjectsForWorker = asyncHandler(async (req, res) => {
  const { workerId } = req.params;
  const { subdomain, fromDate, toDate } = req.query;

  if (!workerId || !subdomain) {
    return res.status(400).json({ message: 'workerId and subdomain are required' });
  }

  let query = { subdomain, developers: workerId };

  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    // Projects that overlap with the date range
    query.$or = [
      { startDate: { $lte: to }, endDate: { $gte: from } }
    ];
  }

  const projects = await SalaryProject.find(query)
    .populate('developers', 'name rfid')
    .sort({ startDate: 1 });

  // For each project, calculate per-day value for this specific worker
  const enriched = projects.map(p => {
    const projectObj = p.toObject();
    const devCount = projectObj.developers.length || 1;
    const share = projectObj.projectProfit / devCount;

    // Count working days (exclude Sundays) in the project range
    const start = new Date(projectObj.startDate);
    const end = new Date(projectObj.endDate);
    let workingDays = 0;
    const cur = new Date(start);
    while (cur <= end) {
      if (cur.getDay() !== 0) workingDays++; // Exclude Sundays
      cur.setDate(cur.getDate() + 1);
    }

    const perDayValue = workingDays > 0 ? share / workingDays : 0;

    return {
      ...projectObj,
      perDeveloperShare: share,
      totalWorkingDays: workingDays,
      perDayValue
    };
  });

  res.status(200).json({ projects: enriched });
});

// Update a salary project
const updateSalaryProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { projectName, projectAmount, profitPercentage, developers, startDate, endDate } = req.body;

  const project = await SalaryProject.findById(id);
  if (!project) return res.status(404).json({ message: 'Salary project not found' });

  if (projectName !== undefined) project.projectName = projectName;
  if (projectAmount !== undefined) project.projectAmount = parseFloat(projectAmount);
  if (profitPercentage !== undefined) project.profitPercentage = parseFloat(profitPercentage);
  if (developers !== undefined) project.developers = developers;
  if (startDate !== undefined) project.startDate = new Date(startDate);
  if (endDate !== undefined) project.endDate = new Date(endDate);

  if (project.startDate > project.endDate) {
    return res.status(400).json({ message: 'startDate must be before or equal to endDate' });
  }

  await project.save();
  const populated = await SalaryProject.findById(project._id).populate('developers', 'name rfid department');

  res.status(200).json({ message: 'Salary project updated', project: populated });
});

// Delete a salary project
const deleteSalaryProject = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const project = await SalaryProject.findByIdAndDelete(id);
  if (!project) return res.status(404).json({ message: 'Salary project not found' });
  res.status(200).json({ message: 'Salary project deleted' });
});

module.exports = {
  giveBonus,
  removeBonus,
  resetSalary,
  getWorkerSalaryReport,
  getMySalaryReport,
  getCompensationReport,
  addDeveloperProject,
  getDeveloperProjects,
  deleteDeveloperProject,
  getAllDeveloperProjectsSummary,
  // Hybrid salary project
  createSalaryProject,
  getSalaryProjects,
  getSalaryProjectsForWorker,
  updateSalaryProject,
  deleteSalaryProject
};