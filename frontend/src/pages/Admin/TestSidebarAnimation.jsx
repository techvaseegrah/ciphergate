import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { FaTachometerAlt, FaUsers, FaDollarSign, FaCalendarAlt, FaBuilding, FaUtensils, FaTasks, FaColumns, FaComments, FaSignOutAlt } from 'react-icons/fa';

const TestSidebarAnimation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  // Mock user data
  const user = {
    name: 'Admin User',
    role: 'Administrator',
    photo: null
  };
  
  // Mock navigation links
  const links = [
    { to: '/admin/dashboard', icon: <FaTachometerAlt className="text-green-500" />, label: 'Dashboard' },
    { to: '/admin/employees', icon: <FaUsers className="text-blue-500" />, label: 'Employees' },
    { to: '/admin/salary', icon: <FaDollarSign className="text-orange-500" />, label: 'Salary' },
    { to: '/admin/attendance', icon: <FaCalendarAlt className="text-red-500" />, label: 'Attendance' },
    { to: '/admin/departments', icon: <FaBuilding className="text-purple-500" />, label: 'Departments' },
    { to: '/admin/food-requests', icon: <FaUtensils className="text-brown-500" />, label: 'Food Requests' },
    { to: '/admin/tasks', icon: <FaTasks className="text-cyan-500" />, label: 'Tasks' },
    { to: '/admin/columns', icon: <FaColumns className="text-blue-gray-500" />, label: 'Columns' },
    { to: '/admin/comments', icon: <FaComments className="text-teal-500" />, label: 'Comments' },
    { isHeader: true, label: 'Actions' },
    { to: '/admin/logout', icon: <FaSignOutAlt className="text-gray-500" />, label: 'Logout' }
  ];
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-4">Sidebar Animation Test</h1>
      <p className="px-4 pb-4">Open and close the sidebar to see the shattered logo animation</p>
      
      {isLoggedIn && (
        <Sidebar 
          links={links}
          logoText="Task Tracker"
          user={user}
          onLogout={handleLogout}
        />
      )}
      
      <div className="p-4 mt-20 md:ml-64">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Test Instructions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Click the arrow button on the left to open the sidebar</li>
            <li>Observe the shattered logo animation when the sidebar opens</li>
            <li>Close the sidebar and open it again to see the animation replay</li>
            <li>The animation should show the logo breaking apart and reassembling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestSidebarAnimation;