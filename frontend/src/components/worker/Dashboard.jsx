import { useState, useEffect, useContext, useMemo } from 'react';
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
import { FaMoneyBillAlt, FaCamera, FaTasks, FaHistory, FaBell, FaExclamationTriangle, FaTrophy, FaChevronDown, FaChevronUp, FaWallet, FaArrowRight, FaCrown, FaMedal, FaArrowCircleUp, FaClipboardList, FaClipboardCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import api from '../../services/api';
import FaceAttendance from '../admin/FaceAttendance';
import RFIDAttendancePopup from './RFIDAttendancePopup';
import MyFines from '../dashboard/MyFines';
import { Link, useNavigate } from 'react-router-dom';

/* ─────────────────────────────────────────
   Shared Components (matching Admin style)
───────────────────────────────────────── */

const SectionHeader = ({ title, sub, action, actionLink }) => (
  <div className="flex items-start justify-between mb-4">
    <div>
      <h2 className="dash-title text-[14px] md:text-[16px] font-bold text-dash-text tracking-tight">
        {title}
      </h2>
      {sub && <p className="text-[11px] text-dash-muted font-medium mt-0.5">{sub}</p>}
    </div>
    {action && actionLink && (
      <Link to={actionLink}
        className="text-[11px] font-bold text-dash-green hover:opacity-80 flex items-center gap-1 flex-shrink-0 transition-opacity">
        {action} <FaArrowRight size={10} />
      </Link>
    )}
  </div>
);

const Dashboard = () => {
  const { subdomain } = useContext(appContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [columns, setColumns] = useState([]);
  const [showAllRecentTasks, setShowAllRecentTasks] = useState(false);
  const [showFaceAttendance, setShowFaceAttendance] = useState(false);
  const [showRFIDAttendance, setShowRFIDAttendance] = useState(false);
  const [accessControl, setAccessControl] = useState({ rfidAttendance: true, faceAttendance: true });
  const [salaryData, setSalaryData] = useState({
    baseSalary: 0,
    finalSalary: 0
  });
  const [topTeams, setTopTeams] = useState([]);

  const fetchSalary = async () => {
    try {
      const data = await getMySalaryReport();
      setSalaryData({
        baseSalary: data.baseSalary ?? 0,
        finalSalary: data.finalSalary ?? 0
      });
    } catch (error) {
      console.error('Failed to fetch salary report:', error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const data = await readNotification(subdomain);
      setNotifications(Array.isArray(data.notifications) ? data.notifications : []);
    } catch (err) {
      console.error('Failed to fetch notifications');
    }
  };

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

  const fetchTopTeams = async () => {
    try {
      const now = new Date();
      const fromDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
      const toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0).toLocaleDateString('en-CA');
      
      const response = await api.get('/salary/top-teams-earnings', {
        params: { subdomain, fromDate, toDate }
      });
      
      setTopTeams(response.data.topTeams || []);
    } catch (error) {
      console.error('Failed to fetch top teams:', error);
    }
  };

  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([
          fetchNotifications(),
          fetchAttendanceLocation(),
          fetchSalary(),
          fetchTopTeams(),
          (async () => {
            const [tasksData, topicsData, columnsData] = await Promise.all([
              getMyTasks(),
              getTopics({ subdomain: user.subdomain }),
              getColumns({ subdomain: user.subdomain })
            ]);
            setTasks(tasksData);
            setTopics(topicsData.filter(topic => topic.department === 'all' || topic.department === user.department));
            setColumns(columnsData.filter(column => column.department === 'all' || column.department === user.department));
          })()
        ]);
      } catch (error) {
        toast.error('Failed to load dashboard data');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) loadDashboardData();
  }, [user, subdomain]);

  const handleAttendanceMarked = () => fetchSalary();
  
  const handleTaskSubmit = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
    toast.success('Task submitted successfully!');
  };

  const totalPoints = useMemo(() => tasks.reduce((acc, t) => acc + (t.points || 0), 0), [tasks]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F5F7FA]">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="bg-dash-bg min-h-screen p-1 md:p-4 lg:p-6">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-2 md:gap-5">
        
        {/* Welcome Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#F2FFF5] via-[#E9FFEF] to-[#C4FFE4] rounded-3xl p-4 md:p-6 border border-green-200/40 shadow-[0_10px_30px_rgba(213,255,237,0.1)]">
          <div className="absolute top-[-20%] right-[-5%] w-[200px] h-[200px] bg-green-200/30 rounded-full blur-[60px]"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 items-stretch">
            
            {/* Left Side: Welcome + Attendance */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
                  Welcome back, <span className="text-teal-600">{user?.name || user?.username}!</span>
                </h1>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  You are currently in the <span className="font-bold text-teal-600 uppercase tracking-wider">{user?.department}</span> department.
                </p>
              </div>

              {/* Integrated Attendance Section */}
              <div className="bg-white/40 backdrop-blur-md rounded-2xl md:rounded-[20px] p-2 md:p-3 border border-white/60">
                <div className="flex items-center justify-between mb-2 px-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Attendance - Mark your presence</p>
                  <div className="flex items-center gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
                     <span className="text-[9px] font-bold text-teal-600 uppercase">Live Session</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {accessControl.faceAttendance && (
                    <button
                      onClick={() => setShowFaceAttendance(true)}
                      className="flex items-center gap-3 p-2 bg-white/80 rounded-xl border border-white/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaCamera size={14} />
                      </div>
                      <div className="text-left">
                        <p className="text-[14px] font-black text-slate-800 uppercase tracking-tight">Face ID</p>
                      </div>
                      <FaArrowRight className="ml-auto text-slate-300 group-hover:text-teal-500 transition-colors" size={12} />
                    </button>
                  )}
                  {accessControl.rfidAttendance && (
                    <button
                      onClick={() => setShowRFIDAttendance(true)}
                      className="flex items-center gap-3 p-2 bg-white/80 rounded-xl border border-white/80 shadow-sm hover:shadow-md hover:border-sky-200 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FaHistory size={14} />
                      </div>
                      <div className="text-left">
                        <p className="text-[14px] font-black text-slate-800 uppercase tracking-tight">RFID Tap</p>
                      </div>
                      <FaArrowRight className="ml-auto text-slate-300 group-hover:text-sky-500 transition-colors" size={12} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Center Side: Salary Stats */}
            <div className="flex flex-col gap-2 md:gap-4">
              {/* Vertical Spacer to align with Attendance section */}
              <div className="hidden md:flex flex-col invisible select-none pointer-events-none" aria-hidden="true">
                <h1 className="text-xl md:text-2xl font-black tracking-tight">Spacer</h1>
                <p className="text-[11px] font-medium mt-0.5">Spacer</p>
              </div>

              <div className="bg-white/40 backdrop-blur-md rounded-2xl md:rounded-[20px] p-2 md:p-3 border border-white/60">
                <div className="flex items-center justify-between mb-2 px-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Salary - Current Month</p>
                  <div className="flex items-center gap-1.5">
                     <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                     <span className="text-[9px] font-bold text-indigo-600 uppercase">Live Payout</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 p-2 bg-white/80 rounded-xl border border-white/80 shadow-sm transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaMoneyBillAlt size={14} />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <p className="text-[14px] font-black text-slate-800 uppercase tracking-tight">Base Salary</p>
                      <p className="text-[14px] text-teal-600 font-bold uppercase tracking-wider">
                        ₹{salaryData.baseSalary.toLocaleString('en-IN', { minimumFractionDigits: 2 })} • Fixed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 bg-white/80 rounded-xl border border-white/80 shadow-sm transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaWallet size={14} />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <p className="text-[14px] font-black text-slate-800 uppercase tracking-tight">Final Payout</p>
                      <p className="text-[14px] text-indigo-600 font-bold uppercase tracking-wider">
                        ₹{salaryData.finalSalary.toLocaleString('en-IN', { minimumFractionDigits: 2 })} • Est.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Top Teams (matching Admin side exactly) */}
            <div className="h-full">
              <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100/50 shadow-inner h-full flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-sm md:text-base font-bold text-slate-800 flex items-center gap-2">
                    <FaCrown className="text-amber-400 drop-shadow-sm" />
                    Top Teams - Live Monthly Earnings
                  </h2>
                  <span className="text-[10px] font-bold text-white bg-green-500/80 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    Top 3 List
                  </span>
                </div>

                <div className="space-y-1.5 flex-1 overflow-y-auto">
                  {topTeams && topTeams.length > 0 ? (
                    <>
                      {topTeams.slice(0, 3).map((team, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                              index === 0 ? 'bg-yellow-100 text-yellow-600' :
                              index === 1 ? 'bg-slate-200 text-slate-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {index === 0 ? <FaTrophy size={14} /> : index === 1 ? <FaMedal size={14} /> : index + 1}
                            </div>
                            <span className="font-bold text-slate-700 text-[15px] group-hover:text-green-600 transition-colors truncate">
                              {team.name}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-extrabold text-amber-500">
                              ₹{team.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="py-8 text-center flex-1 flex flex-col items-center justify-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No earning data available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Width Vertical Sections */}
        <div className="flex flex-col gap-3 md:gap-6">
          
          {/* 1. Latest Notification */}
          <div className="dash-card p-3 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shadow-sm">
                <FaBell size={16} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Latest Notification</h2>
            </div>
            {notifications.length > 0 ? (
              <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-sm font-medium text-slate-700 leading-relaxed mb-3">
                  {notifications[0]?.messageData}
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  {new Date(notifications[0]?.createdAt).toLocaleString()}
                </p>
              </div>
            ) : (
              <div className="py-8 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No notifications found</p>
              </div>
            )}
          </div>

          {/* 2. My Fines */}
          <div className="dash-card p-3 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shadow-sm">
                <FaExclamationTriangle size={16} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">My Fines</h2>
            </div>
            <MyFines noCard={true} />
          </div>

          {/* 3. Submit Custom Task */}
          <div className="dash-card p-3 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shadow-sm">
                <FaClipboardList size={16} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Submit Custom Task</h2>
            </div>
            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <CustomTaskForm />
            </div>
          </div>

          {/* 4. Submit Task */}
          <div className="dash-card p-3 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shadow-sm">
                <FaTasks size={16} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Submit Task</h2>
            </div>
            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <TaskForm topics={topics} columns={columns} onTaskSubmit={handleTaskSubmit} />
            </div>
          </div>

          {/* 5. Your Recent Activity */}
          <div className="dash-card p-3 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                <FaClipboardCheck size={16} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Your Recent Activity</h2>
            </div>
            <div className="space-y-3">
              {tasks.length === 0 ? (
                <div className="py-12 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                  <FaHistory className="mx-auto text-slate-200 text-3xl mb-3" />
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No activity found. Use the form above to submit your first task!</p>
                </div>
              ) : (
                <>
                  {(showAllRecentTasks ? tasks : tasks.slice(0, 5)).map((task) => (
                    <div key={task._id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs">
                          +{task.points}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                            {task.topics?.[0]?.name || task.description || 'Task Submission'}
                          </p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-wider">
                            {new Date(task.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100 uppercase">Verified</span>
                    </div>
                  ))}
                  {tasks.length > 5 && (
                    <button
                      onClick={() => setShowAllRecentTasks(!showAllRecentTasks)}
                      className="w-full py-3 text-xs font-black text-slate-400 hover:text-teal-600 uppercase tracking-[0.2em] transition-colors"
                    >
                      {showAllRecentTasks ? 'Show Less' : `View All ${tasks.length} Tasks`}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* 6. Department Scoreboard */}
          <div className="dash-card p-3 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shadow-sm">
                <FaArrowCircleUp size={16} />
              </div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Department Scoreboard</h2>
            </div>
            <Scoreboard department={user.department} noCard={true} />
          </div>

        </div>

      </div>

      {/* Attendance Popups */}
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
      {showRFIDAttendance && (
        <RFIDAttendancePopup
          isOpen={showRFIDAttendance}
          onClose={() => setShowRFIDAttendance(false)}
          subdomain={subdomain}
          user={user}
          onAttendanceMarked={handleAttendanceMarked}
        />
      )}
    </div>
  );
};

export default Dashboard;