const express = require('express');
const { protect, adminOnly, adminOrWorker, workerOnly } = require('../middleware/authMiddleware');
const { giveBonus, removeBonus, resetSalary, getWorkerSalaryReport, getMySalaryReport, getCompensationReport, addDeveloperProject, getDeveloperProjects, deleteDeveloperProject, getAllDeveloperProjectsSummary } = require('../controllers/salaryController');
const router = express.Router();

router.route('/give-bonus/:id').post(protect, adminOnly, giveBonus);
router.route('/remove-bonus/:id').post(protect, adminOnly, removeBonus);
router.route('/reset-salary').post(protect, adminOnly, resetSalary);
router.route('/report/:id').get(protect, adminOnly, getWorkerSalaryReport);
router.route('/my-report').get(protect, adminOrWorker, getMySalaryReport);
router.route('/compensation-report').post(protect, getCompensationReport); // Add this route

// Developer project routes
router.route('/developer-project').post(protect, addDeveloperProject);
router.route('/developer-projects/:developerId').get(protect, getDeveloperProjects);
router.route('/developer-project/:id').delete(protect, deleteDeveloperProject);
router.route('/developer-projects-summary').get(protect, getAllDeveloperProjectsSummary);

module.exports = router;