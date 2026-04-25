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
  console.log('User Auth Data:', user);
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
    finalSalary: 0
  });

  const fetchSalary = async () => {
    try {
      const data = await getMySalaryReport();
      console.log("Salary API Raw Response:", data); // Debug logging
      
      // Map correct fields: baseSalary is the fixed salary, finalSalary is the actual payout
      const mappedData = {
        baseSalary: data.baseSalary ?? 0,
        finalSalary: data.finalSalary ?? 0
      };
      
      console.log("Mapped Salary UI Data:", mappedData); // Debug logging
      setSalaryData(mappedData);
    } catch (error) {
      console.error('Failed to fetch salary report:', error);
    }
  };

  const fetchNotifications = async () => {
    setIsLoading(true);
    try {
      const data = await readNotification(subdomain);
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

    if (user) {
      loadDashboardData();
    }
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

      {/* Modern 2-Card Salary System */}
      <div
        className="mb-4 rounded-2xl p-4 shadow-sm bg-white text-gray-800 relative overflow-hidden border border-gray-100"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#0d9488] opacity-5 rounded-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#0d9488] opacity-5 rounded-full -ml-8 -mb-8"></div>

        <div className="relative z-10">
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 0.5 }}
            className="text-xl font-bold mb-1 text-[#0d9488]"
          >
            Welcome, {user?.name || user?.username}!
          </motion.h2>
          <p className="text-gray-500 text-xs mb-4">
            Your workspace at{' '}
            <motion.span
              className="font-bold text-[#0d9488]"
            >
              {user?.subdomain}
            </motion.span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {/* Card 1: Base Salary */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md flex items-center h-24">
              <div className="flex items-center space-x-3 w-full">
                <div className="bg-white p-2 rounded-lg flex-shrink-0 border border-gray-100 shadow-sm">
                  <FaMoneyBillAlt className="h-5 w-5 text-[#0d9488]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Base Salary</p>
                  <p className="text-[9px] text-gray-400 leading-none mb-1">Fixed monthly salary</p>
                  <CountUp
                    start={0}
                    end={salaryData.baseSalary}
                    duration={1.5}
                    prefix="₹"
                    decimals={2}
                    className="text-lg font-bold text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Final Salary */}
            <div className="bg-[#0d9488] p-4 rounded-xl shadow-md transition-all hover:scale-[1.01] flex items-center h-24">
              <div className="flex items-center space-x-3 w-full text-white">
                <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 backdrop-blur-sm border border-white/20">
                  <FaMoneyBillAlt className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white/80 uppercase tracking-tight">Final Salary</p>
                  <p className="text-[9px] text-white/60 leading-none mb-1">Calculated salary + project earnings</p>
                  <CountUp
                    start={0}
                    end={salaryData.finalSalary}
                    duration={1.5}
                    prefix="₹"
                    decimals={2}
                    className="text-xl font-bold text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions / Attendance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {accessControl.faceAttendance && (
              <div
                className="bg-white p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-[#0d9488] hover:bg-gray-50 transition-all shadow-sm group"
                onClick={() => setShowFaceAttendance(true)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-lg flex-shrink-0 border border-gray-100 group-hover:bg-[#0d9488] transition-colors">
                    <FaCamera className="h-5 w-5 text-[#0d9488] group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500">Face Attendance</p>
                    <p className="text-xs font-bold text-[#0d9488]">Mark Attendance</p>
                  </div>
                </div>
              </div>
            )}

            {accessControl.rfidAttendance && (
              <div
                className="bg-white p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-[#0d9488] hover:bg-gray-50 transition-all shadow-sm group"
                onClick={() => setShowRFIDAttendance(true)}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 p-2 rounded-lg flex-shrink-0 border border-gray-100 group-hover:bg-[#0d9488] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0d9488] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500">RFID Attendance</p>
                    <p className="text-xs font-bold text-[#0d9488]">Mark Attendance</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {Array.isArray(notifications) && notifications.length > 0 && (
        <Card
          title={
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="text-sm font-bold">Latest Notification</span>
            </div>
          }
          className="mb-4"
          padding="p-3"
        >
          <div className="w-full">
            <p className="text-sm whitespace-normal break-words text-gray-600">
              {notifications[0]?.messageData || "No notifications found."}
            </p>
            <p className="text-[10px] text-gray-400 mt-1">
              {new Date(notifications[0]?.createdAt).toLocaleString()}
            </p>
          </div>
        </Card>
      )}

      {/* My Fines Section */}
      <MyFines />

      <Card className="mb-4" padding="p-4">
        <h2 className="text-lg font-bold mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>Submit Custom Task</span>
        </h2>
        <CustomTaskForm />
      </Card>

      <h1 className="text-xl font-bold mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span>Employee Dashboard</span>
      </h1>

      <Card className="mb-4" padding="p-4">
        <TaskForm
          topics={topics}
          columns={columns}
          onTaskSubmit={handleTaskSubmit}
        />
      </Card>

      <Card
        title={
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Your Recent Activity</span>
          </div>
        }
      >
        {tasks.length === 0 ? (
          <p className="text-gray-500 py-4 text-center">
            No task submissions yet. Use the form above to submit your first task!
          </p>
        ) : (
          <div className="space-y-4">
            {(showAllRecentTasks ? tasks : tasks.slice(0, 5)).map((task) => (
              <div
                key={task._id}
                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex justify-between items-start">
                  <div className="min-w-0">
                    <p className="font-medium truncate">
                      Submitted task: {task.points} points
                    </p>
                    <p className="text-sm text-gray-500">
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
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {topic?.name || 'Unknown Topic'}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {tasks.length > 5 && (
              <button
                onClick={() => setShowAllRecentTasks(!showAllRecentTasks)}
                className="mt-4 w-full py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-300 rounded-md flex items-center justify-center"
              >
                {showAllRecentTasks ? (
                  <>Show Less <FaChevronUp className="ml-1" /></>
                ) : (
                  <>View All ({tasks.length}) Tasks <FaChevronDown className="ml-1" /></>
                )}
              </button>
            )}
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