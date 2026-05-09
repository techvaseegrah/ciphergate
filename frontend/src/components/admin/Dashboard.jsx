import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUsers, FaTasks, FaCalendarAlt, FaBuilding, FaChartBar, FaArrowRight } from 'react-icons/fa';
import { getWorkers } from '../../services/workerService';
import { getAllTasks } from '../../services/taskService';
import { getAllLeaves } from '../../services/leaveService';
import { getAllComments } from '../../services/commentService';
import { getTopics } from '../../services/topicService';
import { getColumns } from '../../services/columnService';
import { getMealsSummary } from '../../services/foodRequestService';
import { getDepartments } from '../../services/departmentService';
import { getAttendanceSummary } from '../../services/attendanceService';
import { getTickets } from '../../services/ticketService';
import Spinner from '../common/Spinner';
import appContext from '../../context/AppContext';

// Circular Progress Component - Refined
const CircularProgress = ({ percentage, size = 100, strokeWidth = 6, color = '#0D9488', showLabel = true }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(0,0,0,0.05)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-[1500ms] ease-in-out"
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${size >= 100 ? 'text-lg md:text-xl' : size >= 50 ? 'text-xs' : 'text-[10px]'} font-black text-slate-900`}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

const calculateKpiStats = (tickets) => {
  const closedTickets = tickets.filter(t => t.status === 'Done');
  let totalDays = 0;

  closedTickets.forEach(t => {
    const doneStatus = t.statusHistory?.find(h => h.status === 'Done');
    if (doneStatus) {
      totalDays += (new Date(doneStatus.changedAt) - new Date(t.createdAt)) / (1000 * 60 * 60 * 24);
    }
  });
  const avgCycleTime = closedTickets.length > 0 ? (totalDays / closedTickets.length).toFixed(1) : 0;

  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const closedThisWeek = closedTickets.filter(t => {
    const doneStatus = t.statusHistory?.find(h => h.status === 'Done');
    return doneStatus && new Date(doneStatus.changedAt) >= oneWeekAgo;
  }).length;

  const breached = closedTickets.filter(t => {
    const doneStatus = t.statusHistory?.find(h => h.status === 'Done');
    if (!doneStatus) return false;
    const days = (new Date(doneStatus.changedAt) - new Date(t.createdAt)) / (1000 * 60 * 60 * 24);
    return days > 7;
  }).length;
  const slaBreachRate = closedTickets.length > 0 ? Math.round((breached / closedTickets.length) * 100) : 0;

  return { avgCycleTime, closedThisWeek, slaBreachRate };
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    workers: 0,
    tasks: 0,
    topics: 0,
    columns: 0,
    foodRequests: 0,
    leaves: { total: 0, pending: 0, approved: 0, rejected: 0 },
    comments: { total: 0, unread: 0 },
    tickets: { todo: 0, inProgress: 0, review: 0, done: 0 },
    kpi: { avgCycleTime: 0, closedThisWeek: 0, slaBreachRate: 0 }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const [attendancePercentage, setAttendancePercentage] = useState(0);
  const { subdomain } = useContext(appContext);

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      const results = await Promise.allSettled([
        getWorkers({ subdomain }),
        getAllTasks({ subdomain }),
        getTopics({ subdomain }),
        getColumns({ subdomain }),
        getAllLeaves({ subdomain }),
        getAllComments({ subdomain }),
        getMealsSummary({ subdomain }),
        getDepartments({ subdomain }),
        getAttendanceSummary({ subdomain }),
        getTickets({ subdomain })
      ]);

      const workersData = results[0].status === 'fulfilled' ? results[0].value : [];
      const tasksData = results[1].status === 'fulfilled' ? results[1].value : [];
      const topicsData = results[2].status === 'fulfilled' ? results[2].value : [];
      const leavesData = results[4].status === 'fulfilled' ? results[4].value : [];
      const commentsData = results[5].status === 'fulfilled' ? results[5].value : [];
      const mealsSummary = results[6].status === 'fulfilled' ? results[6].value : { total: 0 };
      const departmentsDataRaw = results[7].status === 'fulfilled' ? results[7].value : [];
      const attendanceSummaryData = results[8].status === 'fulfilled' ? results[8].value : { percentage: 0 };
      const ticketsData = results[9].status === 'fulfilled' ? results[9].value : [];

      const departmentsDataSafe = Array.isArray(departmentsDataRaw) ? departmentsDataRaw : [];
      const pendingLeaves = leavesData.filter(leave => leave.status === 'Pending');
      const approvedLeaves = leavesData.filter(leave => leave.status === 'Approved');
      const rejectedLeaves = leavesData.filter(leave => leave.status === 'Rejected');
      const unreadComments = commentsData.filter(comment =>
        comment.isNew || comment.replies?.some(reply => reply.isNew)
      );

      const activeWorkers = workersData.filter(w => w.status !== 'Relieved');

      setStats({
        workers: activeWorkers.length,
        tasks: tasksData.length,
        topics: topicsData.length,
        foodRequests: mealsSummary.total,
        leaves: {
          total: leavesData.length,
          pending: pendingLeaves.length,
          approved: approvedLeaves.length,
          rejected: rejectedLeaves.length,
        },
        comments: {
          total: commentsData.length,
          unread: unreadComments.length,
        },
        tickets: {
          todo: ticketsData.filter(t => t.status === 'To Do').length,
          inProgress: ticketsData.filter(t => t.status === 'In Progress').length,
          review: ticketsData.filter(t => t.status === 'Review').length,
          done: ticketsData.filter(t => t.status === 'Done').length,
        },
        kpi: calculateKpiStats(ticketsData)
      });

      setPendingLeaves(pendingLeaves.slice(0, 3));
      setDepartments(departmentsDataSafe);
      setAttendancePercentage(attendanceSummaryData?.percentage || 0);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, [subdomain]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <Spinner size="lg" />
      </div>
    );
  }

  // Helper component for Stat Cards
  const StatCard = ({ title, value, icon: Icon, link }) => (
    <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
        <div className="p-2.5 md:p-3.5 rounded-xl bg-slate-50 text-slate-400 group-hover:text-[#0D9488] group-hover:bg-teal-50 transition-colors duration-300">
          <Icon size={18} className="md:w-6 md:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-wider md:tracking-[0.1em] mb-0.5 md:mb-1">
            {title}
          </h3>
          <p className="text-lg md:text-2xl font-black text-slate-900 tracking-tight truncate">
            {value}
          </p>
        </div>
        {link && (
          <Link to={link} className="hidden md:flex p-2 rounded-full hover:bg-teal-50 text-slate-200 hover:text-[#0D9488] transition-all">
            <FaArrowRight size={12} />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-3 md:p-6 lg:p-10 flex flex-col items-center">
      <div className="w-full max-w-[1440px]">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-[32px] font-black text-slate-900 tracking-tight leading-none uppercase">My Dashboard</h1>
          <p className="text-slate-500 text-xs md:text-sm mt-2 font-medium">Strategic overview and management center</p>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col gap-6">

          {/* Top Row: Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard title="Total Employees" value={stats.workers} icon={FaUsers} link="/admin/workers" />
            <StatCard title="Active Tasks" value={stats.tasks} icon={FaTasks} link="/admin/tasks" />
            <StatCard title="Topics" value={stats.topics} icon={FaTasks} link="/admin/topics" />
            <StatCard title="Attendance" value={`${Math.round(attendancePercentage)}%`} icon={FaChartBar} />
          </div>

          {/* Second Row: Work Board & Performance */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Work Allocation Board */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight">Work Allocation Board</h2>
                  <p className="text-[11px] text-slate-500 font-medium">Task distribution by status</p>
                </div>
                <Link to="/admin/work-allocation" className="px-3 py-1.5 rounded-lg bg-teal-50 text-[#0D9488] font-black text-[10px] uppercase tracking-widest hover:bg-[#0D9488] hover:text-white transition-all flex items-center gap-2">
                  View Board <FaArrowRight size={10} />
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {[
                  { label: 'To Do', value: stats.tickets.todo, color: 'bg-slate-50 text-slate-600', border: 'border-slate-100' },
                  { label: 'Active', value: stats.tickets.inProgress, color: 'bg-blue-50 text-blue-600', border: 'border-blue-100/50' },
                  { label: 'Review', value: stats.tickets.review, color: 'bg-purple-50 text-purple-600', border: 'border-purple-100/50' },
                  { label: 'Done', value: stats.tickets.done, color: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-100/50' }
                ].map((item) => (
                  <div key={item.label} className={`${item.color} ${item.border} rounded-2xl p-4 md:p-5 border shadow-sm`}>
                    <p className="text-[9px] font-black uppercase tracking-widest mb-2 opacity-70">{item.label}</p>
                    <p className="text-2xl md:text-3xl font-black">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance KPI */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight">Performance KPI</h2>
                  <p className="text-[11px] text-slate-500 font-medium">Core efficiency metrics</p>
                </div>
                <Link to="/admin/kpi-management" className="px-3 py-1.5 rounded-lg bg-teal-50 text-[#0D9488] font-black text-[10px] uppercase tracking-widest hover:bg-[#0D9488] hover:text-white transition-all">
                  Analytics
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center py-4">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-3">Turnaround</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <p className="text-2xl md:text-3xl font-black text-slate-900">{stats.kpi.avgCycleTime}</p>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Days</span>
                  </div>
                </div>
                <div className="text-center py-4 border-x border-slate-50">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-3">Closed (7D)</p>
                  <p className="text-2xl md:text-3xl font-black text-slate-900">{stats.kpi.closedThisWeek}</p>
                </div>
                <div className="text-center py-4">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-3">SLA Index</p>
                  <p className={`text-2xl md:text-3xl font-black ${stats.kpi.slaBreachRate > 20 ? 'text-rose-500' : 'text-[#0D9488]'}`}>
                    {100 - stats.kpi.slaBreachRate}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row: Overall Attendance & Attention */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overall Attendance (lg:col-span-2) */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">Overall Attendance</h2>
                <p className="text-xs md:text-sm text-slate-500 font-medium mt-2">Today's attendance overview across all departments</p>
                <div className="mt-8 flex gap-8">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                    <p className="text-sm font-bold text-teal-600 uppercase">Healthy</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Present</p>
                    <p className="text-sm font-bold text-slate-900 uppercase">{Math.round((attendancePercentage / 100) * stats.workers)} Employees</p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <CircularProgress
                  percentage={attendancePercentage}
                  size={120}
                  strokeWidth={12}
                  color="#F59E0B"
                  showLabel={true}
                />
              </div>
            </div>

            {/* Needs Attention Panel (lg:col-span-1) */}
            <div className="lg:col-span-1 bg-[#0D9488] rounded-2xl p-6 text-white shadow-[0_20px_40px_rgba(13,148,136,0.2)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl" />

              <h2 className="text-xl md:text-2xl font-black tracking-tight mb-1">Needs Attention!</h2>
              <p className="text-white/70 text-xs font-medium mb-8">You have pending items requiring review</p>

              <div className="space-y-4 relative z-10">
                {stats.leaves.pending > 0 ? (
                  <div className="bg-white rounded-xl p-4 text-slate-900 shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-black uppercase tracking-tight">Leave Requests</p>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-rose-50 text-rose-600 rounded-md">{stats.leaves.pending} pending</span>
                    </div>
                    <div className="space-y-2">
                      {pendingLeaves.map((leave) => (
                        <div key={leave._id} className="text-[11px] font-bold border-t border-slate-50 pt-2 flex justify-between items-center first:border-0 first:pt-0">
                          <span className="truncate pr-4">{leave.worker?.name || 'Unknown'}</span>
                          <span className="text-slate-400 whitespace-nowrap">{new Date(leave.startDate).toLocaleDateString()}</span>
                        </div>
                      ))}
                      {stats.leaves.pending > 3 && (
                        <p className="text-[10px] text-[#0D9488] font-black text-center pt-2 uppercase tracking-widest cursor-pointer hover:underline">+{stats.leaves.pending - 3} more items</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/10">
                    <p className="text-sm font-black">All Clear! 🎉</p>
                  </div>
                )}

                <Link to="/admin/leaves" className="block w-full py-3 bg-white text-[#0D9488] rounded-xl font-black text-[11px] uppercase tracking-[0.2em] text-center hover:bg-slate-50 transition-all shadow-lg active:scale-95">
                  Review All Items
                </Link>
              </div>
            </div>
          </div>

          {/* Fourth Row: Departments List */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-base md:text-lg font-black text-slate-900 uppercase tracking-tight">Departments</h2>
                <p className="text-[11px] text-slate-500 font-medium">Organization structure overview</p>
              </div>
            </div>

            {departments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept) => (
                  <div key={dept._id} className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-white shadow-sm hover:border-teal-100 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0D9488] shadow-sm border border-slate-50 group-hover:scale-110 transition-transform">
                        <FaBuilding size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-900">{dept.name}</h3>
                        <p className="text-[11px] text-slate-500 font-bold">{dept.workerCount || 0} Employees</p>
                      </div>
                    </div>
                    <CircularProgress
                      percentage={dept.attendancePercentage || 0}
                      size={52}
                      strokeWidth={5}
                      color={
                        dept.attendancePercentage === 100 ? '#0D9488' :
                          dept.attendancePercentage >= 70 ? '#0EA5E9' :
                            dept.attendancePercentage >= 40 ? '#F59E0B' :
                              '#EF4444'
                      }
                      showLabel={true}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-sm font-bold uppercase tracking-widest">No departments found</p>
              </div>
            )}
          </div>

          {/* Fifth Row: Summary Stats Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Leaves (Pending)</p>
                <p className="text-xl font-black text-slate-900">{stats.leaves.pending}</p>
              </div>
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                <FaCalendarAlt size={16} />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Leaves (Approved)</p>
                <p className="text-xl font-black text-slate-900">{stats.leaves.approved}</p>
              </div>
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <FaCalendarAlt size={16} />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Comments (Unread)</p>
                <p className="text-xl font-black text-slate-900">{stats.comments.unread}</p>
              </div>
              <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                <FaChartBar size={16} />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Meals Requested</p>
                <p className="text-xl font-black text-slate-900">{stats.foodRequests}</p>
              </div>
              <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                <FaUsers size={16} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
