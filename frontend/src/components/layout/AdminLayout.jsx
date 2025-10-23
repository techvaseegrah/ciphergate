import { useState, useEffect, useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'; // Add Outlet import
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

  const sidebarLinks = [
    {
      to: '/admin',
      icon: <FaHome style={{ color: '#3B82F6' }} />, // Blue for Dashboard
      label: 'Dashboard'
    },
    {
      to: '/admin/workers',
      icon: <FaUsers style={{ color: '#10B981' }} />, // Green for Workers
      label: 'Employees'
    },
    {
      to: '/admin/salary',
      icon: <FaDollarSign style={{ color: '#FBBF24' }} />, // Green for Workers
      label: 'Salary'
    },
    {
      to: '/admin/attendance',
      icon: <FaRegCalendarCheck style={{ color: '#F43F5E' }} />, // Red for Attendance
      label: 'Attendance'
    },
    {
      to: '/admin/departments',
      icon: <FaBuilding style={{ color: '#4A90E2' }}/>,
      label: 'Departments'
    },

    {
      to: '/admin/food-requests',
      icon: <FaPizzaSlice style={{ color: '#F5A623' }}/>,
      label: 'Food Requests'
    },
        {
      to: '/admin/tasks',
      icon: <FaTasks style={{ color: '#7ED321' }}/>,
      label: 'Tasks'
    },
    {
      to: '/admin/columns',
      icon: <FaColumns style={{ color: '#9B9B9B' }}/>,
      label: 'columns'
    },
    {
      to: '/admin/topics',
      icon: <FaTags style={{ color: '#9B59B6' }}/>,
      label: 'Topics'
    },
    {
      to: '/admin/custom-tasks',
      icon: <FaClipboardList style={{ color: '#F78FB3' }}/>,
      label: 'Custom Tasks'
    },
    {
      to: '/admin/leaves',
      icon: <FaCalendarAlt style={{ color: '#D0021B' }}/>,
      label: 'Leave Requests',
      badge: pendingLeaves > 0 ? pendingLeaves : null
    },
    {
      to: '/admin/gowhats',
      icon: <FaWhatsapp style={{ color: '#00ed14' }}/>,
      label: 'GoWhats',
      // badge: pendingLeaves > 0 ? pendingLeaves : null
    },
    {
      to: '/admin/holidays',
      icon: <FaAsterisk style={{ color: '#02e95a' }}/>,
      label: 'Holidays'
    },
    {
      to: '/admin/notifications',
      icon: <FaRegBell style={{ color: '#ccffcc' }}/>,
      label: 'Notifications',
      badge: newComments > 0 ? newComments : null
    },
    {
      to: '/admin/comments',
      icon: <FaComments style={{ color: '#1ABC9C' }}/>,
      label: 'Comments',
      badge: newComments > 0 ? newComments : null
    },
    
    // Test Management Dropdown Section
    {
      label: 'Test Management',
      isDropdown: true,
      icon: <FaQuestionCircle style={{ color: '#8B5CF6' }} />,
      children: [
        {
          to: '/admin/test/generate-questions',
          icon: <FaQuestionCircle style={{ color: '#3B82F6' }} />,
          label: 'Generate Questions'
        },
        {
          to: '/admin/test/question-history',
          icon: <FaHistory style={{ color: '#10B981' }} />,
          label: 'Questions History'
        },
        {
          to: '/admin/test/employee-scores',
          icon: <FaChartBar style={{ color: '#F59E0B' }} />,
          label: 'Employee Scores'
        },
        {
          to: '/admin/test/global-scoreboard',
          icon: <FaTrophy style={{ color: '#EF4444' }} />,
          label: 'Global Scoreboard'
        }
      ]
    },
    {
      to: '/admin/settings',
      icon: <IoMdSettings style={{ color: '#9B9B9B' }}/>,
      label: 'Settings',
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        links={sidebarLinks}
        logoText="Admin Dashboard"
        user={user}
        onLogout={handleLogout}
      />

      <div className="flex-1 overflow-auto md:ml-64">
        <main className="p-4 md:p-6">
          <Outlet /> {/* Correct import and usage */}
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