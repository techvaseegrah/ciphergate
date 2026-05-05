import React, { useState, useEffect, useContext, Suspense } from 'react';
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
  FaWhatsapp,
  FaAward,
  FaCommentDots,
  FaGithub,
  FaKey,
  FaChalkboardTeacher,
  FaUserTie,
  FaClock,
  FaCalendarMinus,
  FaUmbrellaBeach,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaHandHoldingUsd,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaTrashRestore,
  FaSyncAlt,
  FaDonate,
  FaNetworkWired,
  FaChartLine,
  FaGraduationCap,
  FaStar,
  FaCertificate,
  FaEnvelopeOpenText,
  FaFileSignature,
  FaFileAlt,
  FaCog
} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { FiKey } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { useAuth } from '../../hooks/useAuth';
import { getAllLeaves } from '../../services/leaveService';
import { getAllComments } from '../../services/commentService';
import { getNewInvoiceCount } from '../../services/invoiceService';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import QuestionGenerationTracker from '../admin/QuestionGenerationTracker';
import appContext from '../../context/AppContext';

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
import SalaryProjectManagement from '../admin/SalaryProjectManagement';
import EmployeeCompensation from '../admin/EmployeeCompensation';
import DeveloperCompensation from '../admin/DeveloperCompensation';
import GoWhatsIntegration from '../admin/GoWhatsIntegration';
import HolidayManagement from '../admin/HolidayManagement';
import Communication from '../../pages/Communication';
import Settings from '../admin/Settings';
import WorkerAttendance from '../admin/WorkerAttendance';
import InvoiceManagement from '../admin/InvoiceManagement';
import AdminDashboard from '../../pages/Admin/AdminDashboard';
import InternCertificate from '../admin/InternCertificate';
import OfferLetter from '../admin/OfferLetter';
import AcceptanceLetter from '../admin/AcceptanceLetter';
import RelievingLetter from '../admin/RelievingLetter';
import ExperienceCertificate from '../admin/ExperienceCertificate';
import CommunityFund from '../admin/CommunityFund';
import WorkAllocation from '../admin/WorkAllocation';
import KpiManagement from '../admin/KpiManagement';
import RenewalManagement from '../admin/RenewalManagement';
import ApiKeyManagement from '../admin/ApiKeyManagement';
import AdminDeleteHistory from '../admin/AdminDeleteHistory';
import FaceAttendancePage from '../admin/FaceAttendancePage';

// Lazy load test management components
const GenerateQuestions = React.lazy(() => import('../admin/GenerateQuestions'));
const QuestionHistory = React.lazy(() => import('../admin/QuestionHistory'));
const EmployeeScores = React.lazy(() => import('../admin/EmployeeScores'));
const GlobalScoreboard = React.lazy(() => import('../admin/GlobalScoreboard'));

// Lazy load GitHub Tracker
const GitHubDashboard = React.lazy(() => import('../github-tracker/GitHubDashboard'));

// Custom Premium Loader
const PageLoader = () => (
  <div className="flex justify-center items-center h-[70vh]">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-[#0d9488]/20 border-t-[#0d9488] rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-[#10B981]/20 border-b-[#10B981] rounded-full animate-spin-reverse"></div>
    </div>
  </div>
);

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const [pendingLeaves, setPendingLeaves] = useState(0);
  const [newComments, setNewComments] = useState(0);
  const [newInvoices, setNewInvoices] = useState(0);
  const [showGlobalTracker] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const { subdomain } = useContext(appContext);

  useEffect(() => {
    const fetchNotificationCounts = async () => {
      try {
        const leaves = await getAllLeaves({ subdomain }) || [];
        const unviewedLeaves = Array.isArray(leaves) ? leaves.filter(leave =>
          !leave.workerViewed &&
          (leave.status === 'Pending' || leave.status === 'Approved')
        ).length : 0;
        setPendingLeaves(unviewedLeaves);

        const comments = await getAllComments({ subdomain });
        const newUnreadComments = comments.filter(comment =>
          comment.isNew ||
          (comment.replies && comment.replies.some(reply => reply.isNew))
        ).length;
        setNewComments(newUnreadComments);

        const invoiceData = await getNewInvoiceCount();
        setNewInvoices(invoiceData.data?.count || 0);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotificationCounts();
    const intervalId = setInterval(fetchNotificationCounts, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [subdomain]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const sidebarLinks = [
    {
      to: '/admin',
      label: 'Dashboard',
      icon: <FaHome />,
    },
    {
      label: 'HR & People',
      icon: <FaUsers />,
      isDropdown: true,
      children: [
        { to: '/admin/workers', label: 'Employees', icon: <FaUserTie /> },
        { to: '/admin/departments', label: 'Departments', icon: <FaBuilding /> },
        { to: '/admin/attendance', label: 'Attendance', icon: <FaClock /> },
        { to: '/admin/leaves', label: 'Leave Requests', icon: <FaCalendarMinus />, badge: pendingLeaves > 0 ? pendingLeaves : null },
        { to: '/admin/holidays', label: 'Holidays', icon: <FaUmbrellaBeach /> },
      ],
    },
    {
      label: 'Finance & Payroll',
      icon: <FaDollarSign />,
      isDropdown: true,
      children: [
        { isSubHeader: true, label: 'Compensation' },
        { to: '/admin/salary', label: 'Salary Management', icon: <FaMoneyBillWave /> },
        { to: '/admin/salary-projects', label: 'Salary Projects', icon: <FaProjectDiagram /> },
        { to: '/admin/compensation', label: 'Employee Comp.', icon: <FaHandHoldingUsd /> },
        { to: '/admin/developer-compensation', label: 'Developer Comp.', icon: <FaLaptopCode /> },
        { isSubHeader: true, label: 'Billing' },
        { to: '/admin/invoices', label: 'Invoices', icon: <FaFileInvoiceDollar />, badge: newInvoices > 0 ? newInvoices : null },
        { to: '/admin/renewals', label: 'Renewals', icon: <FaSyncAlt /> },
        { isSubHeader: true, label: 'Funds' },
        { to: '/admin/community-fund', label: 'Community Fund', icon: <FaDonate /> },
      ],
    },
    {
      label: 'Operations & Projects',
      icon: <FaTasks />,
      isDropdown: true,
      children: [
        { to: '/admin/work-allocation', label: 'Work Allocation', icon: <FaNetworkWired /> },
        { to: '/admin/tasks', label: 'Tasks', icon: <FaTasks /> },
        { to: '/admin/custom-tasks', label: 'Custom Tasks', icon: <FaClipboardList /> },
        { to: '/admin/topics', label: 'Topics', icon: <FaTags /> },
        { to: '/admin/columns', label: 'Kanban Boards', icon: <FaColumns /> },
        { to: '/admin/github-tracker', label: 'GitHub Tracker', icon: <FaGithub /> },
        { to: '/admin/kpi-management', label: 'KPI Management', icon: <FaChartLine /> },
      ],
    },
    {
      label: 'Comms & Requests',
      icon: <FaComments />,
      isDropdown: true,
      children: [
        { to: '/admin/communication', label: 'Communication', icon: <FaComments /> },
        { to: '/admin/gowhats', label: 'GoWhats', icon: <FaWhatsapp /> },
        { to: '/admin/notifications', label: 'Notifications', icon: <FaRegBell />, badge: newComments > 0 ? newComments : null },
        { to: '/admin/comments', label: 'Comments', icon: <FaCommentDots />, badge: newComments > 0 ? newComments : null },
        { to: '/admin/food-requests', label: 'Food Requests', icon: <FaPizzaSlice /> },
      ],
    },
    {
      label: 'Training & Growth',
      icon: <FaAward />,
      isDropdown: true,
      children: [
        { isSubHeader: true, label: 'Training' },
        { to: '/admin/test/generate-questions', label: 'Test Management', icon: <FaGraduationCap /> },
        { to: '/admin/test/question-history', label: 'Question History', icon: <FaHistory /> },
        { to: '/admin/test/employee-scores', label: 'Employee Scores', icon: <FaStar /> },
        { to: '/admin/test/global-scoreboard', label: 'Global Scoreboard', icon: <FaTrophy /> },
        { isSubHeader: true, label: 'Documents' },
        { to: '/admin/offer-letter', label: 'Offer Letter', icon: <FaEnvelopeOpenText /> },
        { to: '/admin/acceptance-letter', label: 'Acceptance Letter', icon: <FaFileSignature /> },
        { to: '/admin/relieving-letter', label: 'Relieving Letter', icon: <FaFileAlt /> },
        { to: '/admin/experience-certificate', label: 'Experience Cert.', icon: <FaAward /> },
        { to: '/admin/intern-certificate', label: 'Intern Cert.', icon: <FaCertificate /> },
      ],
    },
    {
      label: 'System & Admin',
      icon: <IoMdSettings />,
      isDropdown: true,
      children: [
        { to: '/admin/settings', label: 'Settings', icon: <FaCog /> },
        { to: '/admin/api-keys', label: 'API Management', icon: <FaKey /> },
      ],
    },
  ];

  const bottomNavItems = [
    { to: '/admin', icon: <FaHome />, label: 'Home' },
    { to: '/admin/work-allocation', icon: <FaTasks />, label: 'Work' },
    { to: '/admin/leaves', icon: <FaCalendarAlt />, label: 'Leave', badgeKey: 'leaves' },
    { to: '/admin/attendance', icon: <FaClipboardList />, label: 'Reports' },
    { to: '/admin/test/generate-questions', icon: <FaGraduationCap />, label: 'Training' },
  ];

  const bottomNavPaths = bottomNavItems.map(item => item.to);

  const allLinks = sidebarLinks.reduce((acc, link) => {
    if (link.isDropdown && link.children) {
      const mappedChildren = link.children
        .filter(child => !child.isSubHeader)
        .map(child => ({
          ...child,
          icon: child.icon || link.icon
        }));
      return [...acc, ...mappedChildren];
    }
    if (!link.isHeader && !link.isDropdown) {
      return [...acc, link];
    }
    return acc;
  }, []);

  const menuLinks = allLinks.filter(link => !bottomNavPaths.includes(link.to));

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* Sleek Sidebar */}
      <Sidebar
        links={sidebarLinks}
        logoText="Admin Dashboard"
        user={user}
        onLogout={handleLogout}
        mobileOpen={isSidebarOpen}
        setMobileOpen={setIsSidebarOpen}
        isAdmin={true}
      />

      {/* Main Content Surface */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden transition-all duration-300">
        <Header 
          user={user} 
          menuLinks={menuLinks} 
          sidebarLinks={sidebarLinks} 
          onLogout={handleLogout} 
          isAdmin={true} 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto pb-6 md:pb-10 custom-main-scroll">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 py-6"
          >
            <Routes>
              <Route index element={<AdminDashboard />} />
              <Route path="workers" element={<WorkerManagement />} />
              <Route path="compensation" element={<EmployeeCompensation />} />
              <Route path="developer-compensation" element={<DeveloperCompensation />} />
              <Route path="salary" element={<SalaryManagement />} />
              <Route path="salary-projects" element={<SalaryProjectManagement />} />
              <Route path="attendance" element={<AttendanceManagement />} />
              <Route path="attendance/:id" element={<WorkerAttendance />} />
              <Route path="departments" element={<DepartmentManagement />} />
              <Route path="work-allocation" element={<WorkAllocation />} />
              <Route path="kpi-management" element={<KpiManagement />} />
              <Route path="columns" element={<ColumnManagement />} />
              <Route path="tasks" element={<TaskManagement />} />
              <Route path="leaves" element={<LeaveManagement />} />
              <Route path="holidays" element={<HolidayManagement />} />
              <Route path="comments" element={<CommentManagement />} />
              <Route path="topics" element={<TopicManagement />} />
              <Route path="food-requests" element={<FoodRequestManagement />} />
              
              <Route path="github-tracker" element={
                <Suspense fallback={<PageLoader />}>
                  <GitHubDashboard />
                </Suspense>
              } />
              
              <Route path="custom-tasks" element={<CustomTasks />} />
              <Route path="notifications" element={<NotificationManagement />} />
              <Route path="settings" element={<Settings />} />
              <Route path="gowhats" element={<GoWhatsIntegration />} />
              <Route path="communication" element={<Communication />} />
              <Route path="invoices" element={<InvoiceManagement />} />
              <Route path="intern-certificate" element={<InternCertificate />} />
              <Route path="offer-letter" element={<OfferLetter />} />
              <Route path="acceptance-letter" element={<AcceptanceLetter />} />
              <Route path="relieving-letter" element={<RelievingLetter />} />
              <Route path="experience-certificate" element={<ExperienceCertificate />} />
              <Route path="renewals" element={<RenewalManagement />} />

              {/* Test Management Routes */}
              <Route path="test/generate-questions" element={
                <Suspense fallback={<PageLoader />}>
                  <GenerateQuestions />
                </Suspense>
              } />
              <Route path="test/question-history" element={
                <Suspense fallback={<PageLoader />}>
                  <QuestionHistory />
                </Suspense>
              } />
              <Route path="test/employee-scores" element={
                <Suspense fallback={<PageLoader />}>
                  <EmployeeScores />
                </Suspense>
              } />
              <Route path="test/global-scoreboard" element={
                <Suspense fallback={<PageLoader />}>
                  <GlobalScoreboard />
                </Suspense>
              } />

              <Route path="community-fund" element={<CommunityFund />} />
              <Route path="api-keys" element={<ApiKeyManagement />} />
              <Route path="delete-history" element={<AdminDeleteHistory />} />
              <Route path="face-attendance" element={<FaceAttendancePage />} />

              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Routes>
          </motion.div>
        </main>
      </div>

      <QuestionGenerationTracker
        isVisible={showGlobalTracker}
        onClose={() => { }}
        generationData={null}
        isGenerating={false}
      />

      {/* BottomNavigation removed for Admin as per strict separation rules */}

      <style>{`
        .custom-main-scroll::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-main-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-main-scroll::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
          border: 2px solid #F8FAFC;
        }
        .custom-main-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;