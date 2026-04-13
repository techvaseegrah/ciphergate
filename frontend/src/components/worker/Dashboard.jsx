import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { getMyTasks } from '../../services/taskService';
import { getTopics } from '../../services/topicService';
import { getColumns } from '../../services/columnService';
import { getMySalaryReport } from '../../services/salaryService';
import TaskForm from './TaskForm';
import Scoreboard from './Scoreboard';
import Card from '../common/Card';
import Spinner from '../common/Spinner';
import CustomTaskForm from './CustomTaskForm';
import { readNotification } from '../../services/notificationService';
import appContext from '../../context/AppContext';
import { FaMoneyBillAlt, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// Removed Link import since we won't be using it for navigation
import api from '../../services/api';
// Import the attendance components
import FaceAttendance from '../admin/FaceAttendance';
import RFIDAttendancePopup from './RFIDAttendancePopup'; // We'll create this component
import MyFines from '../dashboard/MyFines'; // Import MyFines component

const Dashboard = () => {
  const { subdomain } = useContext(appContext);
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();
  console.log(user);
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [columns, setColumns] = useState([]);
  const [showAllRecentTasks, setShowAllRecentTasks] = useState(false);
  const [attendanceLocation, setAttendanceLocation] = useState(null);
  // State for controlling attendance popups
  const [showFaceAttendance, setShowFaceAttendance] = useState(false);
  const [showRFIDAttendance, setShowRFIDAttendance] = useState(false);
  const [accessControl, setAccessControl] = useState({ rfidAttendance: true, faceAttendance: true });
  const [salaryData, setSalaryData] = useState({
    baseSalary: 0,
    finalSalary: 0,
    actualEarnedSalary: 0,
    totalDeductions: 0
  });

  const fetchSalary = async () => {
    try {
      const data = await getMySalaryReport();
      console.log("Salary API Raw Data:", data); // Debug logging
      setSalaryData({
        baseSalary: data.baseSalary ?? 0,
        finalSalary: data.finalSalary ?? data.baseSalary ?? 0,
        actualEarnedSalary: data.actualEarnedSalary ?? 0,
        totalDeductions: data.totalDeductions ?? 0
      });
    } catch (error) {
      console.error('Failed to fetch salary report:', error);
    }
  };

  const fetchNotifications = async () => {
    setIsLoading(true);
    try {
      const data = await readNotification(subdomain);
      console.log(data.notifications);
      setNotifications(Array.isArray(data.notifications) ? data.notifications : []);
    } catch (err) {
      toast.error('Failed to fetch notifications');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch attendance location settings
  const fetchAttendanceLocation = async () => {
    try {
      if (subdomain && subdomain !== 'main') {
        const response = await api.get(`/settings/public/${subdomain}`);
        if (response.data?.attendanceAccessControl?.employee) {
          setAccessControl(response.data.attendanceAccessControl.employee);
        }
      }
    } catch (error) {
      console.error('Error fetching attendance location:', error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    fetchAttendanceLocation();
    fetchSalary();
  }, []);

  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        const [tasksData, topicsData, columnsData] = await Promise.all([
          getMyTasks(),
          getTopics({ subdomain: user.subdomain }),
          getColumns({ subdomain: user.subdomain })
        ]);

        setTasks(tasksData);

        // Filter topics for the worker's department
        const filteredTopics = topicsData.filter(topic =>
          topic.department === 'all' || topic.department === user.department
        );
        setTopics(filteredTopics);

        // Filter columns for the worker's department
        const filteredColumns = columnsData.filter(column =>
          column.department === 'all' || column.department === user.department
        );
        setColumns(filteredColumns);
      } catch (error) {
        toast.error('Failed to load dashboard data');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, [user]);

  const handleAttendanceMarked = () => {
    fetchSalary();
  };

  const handleTaskSubmit = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
    toast.success('Task submitted successfully!');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    // Added w-full overflow-x-hidden to prevent horizontal scrolling
    <div className="w-full overflow-x-hidden">
      {/* Face Attendance Popup */}
      {showFaceAttendance && (
        <FaceAttendance
          subdomain={subdomain}
          isOpen={showFaceAttendance}
          onClose={() => setShowFaceAttendance(false)}
          workerMode={true}
          currentWorker={user}
          onAttendanceMarked={handleAttendanceMarked}
        />
      )}

      {/* RFID Attendance Popup */}
      {showRFIDAttendance && (
        <RFIDAttendancePopup
          isOpen={showRFIDAttendance}
          onClose={() => setShowRFIDAttendance(false)}
          subdomain={subdomain}
          user={user}
          onAttendanceMarked={handleAttendanceMarked}
        />
      )}

      {/* Improved responsive grid for salary cards */}
      <div
        className="mb-6 rounded-3xl p-6 shadow-lg bg-white text-gray-800 relative overflow-hidden border border-gray-100"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d9488] opacity-5 rounded-full -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0d9488] opacity-5 rounded-full -ml-10 -mb-10"></div>

        <div className="relative z-10">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.5 }}
            className="text-2xl font-bold mb-2 text-[#0d9488]"
          >
            Welcome, {user?.name || user?.username}!
          </motion.h2>
          <p className="text-gray-600 text-sm mb-6">
            Your workspace at{' '}
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.5 }}
              className="font-bold text-[#0d9488]"
            >
              {user?.subdomain}
            </motion.span>
          </p>

          {/* Responsive grid that works well on all screen sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Base Salary with Icon */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg flex-shrink-0 border border-gray-200">
                  <FaMoneyBillAlt className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-600 truncate">Base Monthly Salary</p>
                  <CountUp
                    start={0}
                    end={salaryData.baseSalary || 0}
                    duration={1}
                    prefix="₹"
                    decimals={2}
                    className="text-xl font-bold text-gray-800 truncate"
                  />
                </div>
              </div>
            </div>

            {/* Final Monthly Salary with Icon - HIGHLIGHTED */}
            <div className="bg-[#0d9488] p-4 rounded-xl border border-[#0d9488] shadow-md">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-lg flex-shrink-0">
                  <FaMoneyBillAlt className="h-6 w-6 text-[#0d9488]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white opacity-90 truncate">Final Monthly Salary</p>
                  <div
                    title={
                      `Actual Earned: ₹${(salaryData.actualEarnedSalary || 0).toFixed(2)} | ` +
                      `Total Deductions: ₹${(salaryData.totalDeductions || 0).toFixed(2)}`
                    }
                  >
                    <CountUp
                      start={0}
                      end={salaryData.finalSalary || 0}
                      duration={1}
                      prefix="₹"
                      decimals={2}
                      className="text-2xl font-bold text-white truncate"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance Cards */}
            {accessControl.faceAttendance && (
              <div
                className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#0d9488] hover:bg-gray-50 transition-all shadow-sm group"
                onClick={() => setShowFaceAttendance(true)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-lg flex-shrink-0 border border-gray-200 group-hover:bg-[#0d9488] group-hover:border-[#0d9488] transition-colors">
                    <FaCamera className="h-6 w-6 text-[#0d9488] group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-600 truncate">Face Attendance</p>
                    <p className="text-sm font-bold text-[#0d9488] truncate">
                      Mark Attendance
                    </p>
                  </div>
                </div>
              </div>
            )}

            {accessControl.rfidAttendance && (
              <div
                className="bg-white p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#0d9488] hover:bg-gray-50 transition-all shadow-sm group"
                onClick={() => setShowRFIDAttendance(true)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-lg flex-shrink-0 border border-gray-200 group-hover:bg-[#0d9488] group-hover:border-[#0d9488] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0d9488] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-600 truncate">RFID Attendance</p>
                    <p className="text-sm font-bold text-[#0d9488] truncate">
                      Mark Attendance
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {
        Array.isArray(notifications) && notifications.length > 0 && (
          <Card
            title={
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="truncate">Latest Notification</span>
              </div>
            }
            className="mb-6"
          >
            <div className="w-full">
              <p className="whitespace-normal break-words">
                {notifications[0]?.messageData || "No notifications found."}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(notifications[0]?.createdAt).toLocaleString()}
              </p>
            </div>
          </Card>
        )
      }

      {/* My Fines Section */}
      <MyFines />

      <Card className="mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="truncate">Submit Custom Task</span>
        </h2>
        <CustomTaskForm />
      </Card>

      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span className="truncate">Employee Dashboard</span>
      </h1>

      <Card className="mb-6">
        <TaskForm
          topics={topics}
          columns={columns}
          onTaskSubmit={handleTaskSubmit}
        />
      </Card>

      <Card
        title={
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="truncate">Your Recent Activity</span>
          </div>
        }
      >
        {tasks.length === 0 ? (
          <p className="text-gray-500 py-4 text-center">
            No task submissions yet. Use the form above to submit your first task!
          </p>
        ) : (
          <div className="space-y-4">
            {/* CONDITIONAL RENDERING OF TASKS */}
            {(showAllRecentTasks ? tasks : tasks.slice(0, 5)).map((task) => ( //
              <div
                key={task._id}
                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex justify-between items-start">
                  <div className="min-w-0">
                    <p className="font-medium truncate">
                      Submitted task: {task.points} points
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {new Date(task.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full flex-shrink-0">
                    +{task.points}
                  </div>
                </div>

                {task.topics && task.topics.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs text-gray-500 mb-1">Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {task.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full truncate max-w-[120px]"
                        >
                          {topic?.name || 'Unknown Topic'}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* END CONDITIONAL RENDERING OF TASKS */}

            {/* "View All / Show Less" BUTTON */}
            {tasks.length > 5 && ( // Only show if more than 5 tasks exist
              <button
                onClick={() => setShowAllRecentTasks(!showAllRecentTasks)} // Toggle visibility
                className="mt-4 w-full py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-300 rounded-md flex items-center justify-center" //
              >
                {showAllRecentTasks ? ( // Change text and icon based on state
                  <>Show Less <FaChevronUp className="ml-1" /></> //
                ) : (
                  <>View All ({tasks.length}) Tasks <FaChevronDown className="ml-1" /></> //
                )}
              </button>
            )}
            {/* END "View All / Show Less" BUTTON */}
          </div>
        )}
      </Card>

      <div className="mt-6">
        <Scoreboard department={user.department} />
      </div>
    </div>
  );
};

export default Dashboard;