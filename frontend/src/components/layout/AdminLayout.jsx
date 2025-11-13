import React, { useState, useEffect, useContext } from 'react'; // Add React import
import { useNavigate, Outlet, Routes, Route, Navigate } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaTasks,
  FaColumns,
  FaCalendarAlt,
  FaComments,
  FaTags,
  FaPizzaSlice,
  FaClipboardList,
  FaRegCalendarCheck,
  FaRegBell,
  FaDollarSign,
  FaQuestionCircle,
  FaHistory,
  FaTrophy,
  FaChartBar,
  FaAsterisk,
  FaWhatsapp
} from 'react-icons/fa';

import { useAuth } from '../../hooks/useAuth';
import { getAllLeaves } from '../../services/leaveService';
import { getAllComments } from '../../services/commentService';
import Sidebar from './Sidebar';
import QuestionGenerationTracker from '../admin/QuestionGenerationTracker';
import appContext from '../../context/AppContext';
import { IoMdSettings } from 'react-icons/io';
import TestLogo from '../../pages/Admin/TestLogo';
import { Suspense } from 'react';

// Import management components
import WorkerManagement from '../admin/WorkerManagement';
import DepartmentManagement from '../admin/DepartmentManagement';
import ColumnManagement from '../admin/ColumnManagement';
import TaskManagement from '../admin/TaskManagement';
import LeaveManagement from '../admin/LeaveManagement';
import CommentManagement from '../admin/CommentManagement';
import TopicManagement from '../admin/TopicManager';
import FoodRequestManagement from '../admin/FoodRequestManagement';
import CustomTasks from '../admin/CustomTasks';
import AttendanceManagement from '../admin/AttendanceManagement';
import NotificationManagement from '../admin/NotificationManagement';
import SalaryManagement from '../admin/SalaryManagement';
import GoWhatsIntegration from '../admin/GoWhatsIntegration';
import HolidayManagement from '../admin/HolidayManagement';
import Settings from '../admin/Settings';
import WorkerAttendance from '../admin/WorkerAttendance';
import AdminDashboard from '../../pages/Admin/AdminDashboard'; // Add this import

// Lazy load test management components
const GenerateQuestions = React.lazy(() => import('../admin/GenerateQuestions'));
const QuestionHistory = React.lazy(() => import('../admin/QuestionHistory'));
const EmployeeScores = React.lazy(() => import('../admin/EmployeeScores'));
const GlobalScoreboard = React.lazy(() => import('../admin/GlobalScoreboard'));

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const [pendingLeaves, setPendingLeaves] = useState(0);
  const [newComments, setNewComments] = useState(0);
  
  // Global question generation tracker state (for future use)
  const [showGlobalTracker] = useState(false);
  
  const navigate = useNavigate();
  const { subdomain } = useContext(appContext);

  // Check for new comments and leave updates
  useEffect(() => {
    const fetchNotificationCounts = async () => {
      try {
        // Fetch leaves
        const leaves = await getAllLeaves({ subdomain }) || [];
        const unviewedLeaves = Array.isArray(leaves) ? leaves.filter(leave =>
          !leave.workerViewed &&
          (leave.status === 'Pending' || leave.status === 'Approved')
        ).length : 0;
        setPendingLeaves(unviewedLeaves);

        // Fetch comments
        const comments = await getAllComments({ subdomain });
        const newUnreadComments = comments.filter(comment =>
          comment.isNew ||
          (comment.replies && comment.replies.some(reply => reply.isNew))
        ).length;
        setNewComments(newUnreadComments);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotificationCounts();

    const intervalId = setInterval(fetchNotificationCounts, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  // Multi-color icon scheme
  const iconColors = {
    dashboard: '#4CAF50', // Green
    workers: '#2196F3', // Blue
    salary: '#FF9800', // Orange
    attendance: '#F44336', // Red
    departments: '#9C27B0', // Purple
    food: '#795548', // Brown
    tasks: '#00BCD4', // Cyan
    columns: '#607D8B', // Blue Grey
    topics: '#E91E63', // Pink
    customTasks: '#FF5722', // Deep Orange
    leaves: '#8BC34A', // Light Green
    gowhats: '#00E676', // Green A400
    holidays: '#00E5FF', // Cyan A400
    notifications: '#FFD600', // Yellow A400
    comments: '#64FFDA', // Teal A400
    test: '#7C4DFF', // Deep Purple A400
    history: '#FF4081', // Pink A400
    scores: '#18FFFF', // Cyan A400
    scoreboard: '#FF6E40', // Deep Orange A400
    settings: '#78909C' // Blue Grey 300
  };

  const sidebarLinks = [
    {
      to: '/admin',
      icon: <FaHome style={{ color: iconColors.dashboard }} />,
      label: 'Dashboard'
    },
    {
      to: '/admin/workers',
      icon: <FaUsers style={{ color: iconColors.workers }} />,
      label: 'Employees'
    },
    {
      to: '/admin/salary',
      icon: <FaDollarSign style={{ color: iconColors.salary }} />,
      label: 'Salary'
    },
    {
      to: '/admin/attendance',
      icon: <FaRegCalendarCheck style={{ color: iconColors.attendance }} />,
      label: 'Attendance'
    },
    {
      to: '/admin/departments',
      icon: <FaBuilding style={{ color: iconColors.departments }}/>,
      label: 'Departments'
    },

    {
      to: '/admin/food-requests',
      icon: <FaPizzaSlice style={{ color: iconColors.food }}/>,
      label: 'Food Requests'
    },
    {
      to: '/admin/tasks',
      icon: <FaTasks style={{ color: iconColors.tasks }}/>,
      label: 'Tasks'
    },
    {
      to: '/admin/columns',
      icon: <FaColumns style={{ color: iconColors.columns }}/>,
      label: 'columns'
    },
    {
      to: '/admin/topics',
      icon: <FaTags style={{ color: iconColors.topics }}/>,
      label: 'Topics'
    },
    {
      to: '/admin/custom-tasks',
      icon: <FaClipboardList style={{ color: iconColors.customTasks }}/>,
      label: 'Custom Tasks'
    },
    {
      to: '/admin/leaves',
      icon: <FaCalendarAlt style={{ color: iconColors.leaves }}/>,
      label: 'Leave Requests',
      badge: pendingLeaves > 0 ? pendingLeaves : null
    },
    {
      to: '/admin/gowhats',
      icon: <FaWhatsapp style={{ color: iconColors.gowhats }}/>,
      label: 'GoWhats',
      // badge: pendingLeaves > 0 ? pendingLeaves : null
    },
    {
      to: '/admin/holidays',
      icon: <FaAsterisk style={{ color: iconColors.holidays }}/>,
      label: 'Holidays'
    },
    {
      to: '/admin/notifications',
      icon: <FaRegBell style={{ color: iconColors.notifications }}/>,
      label: 'Notifications',
      badge: newComments > 0 ? newComments : null
    },
    {
      to: '/admin/comments',
      icon: <FaComments style={{ color: iconColors.comments }}/>,
      label: 'Comments',
      badge: newComments > 0 ? newComments : null
    },
    
    // Test Management Dropdown Section
    {
      label: 'Test Management',
      isDropdown: true,
      icon: <FaQuestionCircle style={{ color: iconColors.test }} />,
      children: [
        {
          to: '/admin/test/generate-questions',
          icon: <FaQuestionCircle style={{ color: iconColors.test }} />,
          label: 'Generate Questions'
        },
        {
          to: '/admin/test/question-history',
          icon: <FaHistory style={{ color: iconColors.history }} />,
          label: 'Questions History'
        },
        {
          to: '/admin/test/employee-scores',
          icon: <FaChartBar style={{ color: iconColors.scores }} />,
          label: 'Employee Scores'
        },
        {
          to: '/admin/test/global-scoreboard',
          icon: <FaTrophy style={{ color: iconColors.scoreboard }} />,
          label: 'Global Scoreboard'
        }
      ]
    },
    {
      to: '/admin/test-logo',
      icon: <FaChartBar style={{ color: iconColors.scoreboard }} />,
      label: 'Test Logo'
    },
    {
      to: '/test-sidebar-animation',
      icon: <FaRegCalendarCheck style={{ color: iconColors.attendance }} />,
      label: 'Test Sidebar Animation'
    },
    {
      to: '/admin/settings',
      icon: <IoMdSettings style={{ color: iconColors.settings }}/>,
      label: 'Settings',
    }
  ];

  return (
    <div className="flex h-screen bg-light">
      <Sidebar
        links={sidebarLinks}
        logoText="Admin Dashboard"
        user={user}
        onLogout={handleLogout}
      />

      <div className="flex-1 overflow-auto md:ml-64">
        <main className="p-4 md:p-6">
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="workers" element={<WorkerManagement />} />
            <Route path="salary" element={<SalaryManagement />} />
            <Route path="attendance" element={<AttendanceManagement />} />
            <Route path="attendance/:id" element={<WorkerAttendance />} />
            <Route path="departments" element={<DepartmentManagement />} />
            <Route path="columns" element={<ColumnManagement />} />
            <Route path="tasks" element={<TaskManagement />} />
            <Route path="leaves" element={<LeaveManagement />} />
            <Route path="holidays" element={<HolidayManagement />} />
            <Route path="comments" element={<CommentManagement />} />
            <Route path="topics" element={<TopicManagement />} />
            <Route path="food-requests" element={<FoodRequestManagement />} />
            <Route path="custom-tasks" element={<CustomTasks />} />
            <Route path="notifications" element={<NotificationManagement />} />
            <Route path="settings" element={<Settings />} />
            <Route path="gowhats" element={<GoWhatsIntegration />} />
            <Route path="test-logo" element={<TestLogo />} />
            
            {/* Test Management Routes - Wrapped with Suspense for lazy loading */}
            <Route path="test/generate-questions" element={
              <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div></div>}>
                <GenerateQuestions />
              </Suspense>
            } />
            <Route path="test/question-history" element={
              <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div></div>}>
                <QuestionHistory />
              </Suspense>
            } />
            <Route path="test/employee-scores" element={
              <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div></div>}>
                <EmployeeScores />
              </Suspense>
            } />
            <Route path="test/global-scoreboard" element={
              <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div></div>}>
                <GlobalScoreboard />
              </Suspense>
            } />
            
            {/* Catch-all route for unknown admin paths */}
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </main>
      </div>
      
      {/* Global Question Generation Tracker - Available for future enhancements */}
      <QuestionGenerationTracker
        isVisible={showGlobalTracker}
        onClose={() => {}}
        generationData={null}
        isGenerating={false}
      />
    </div>
  );
};

export default AdminLayout;