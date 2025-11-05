import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import appContext from '../../context/AppContext';

const Sidebar = ({
  links,
  logoText = 'Task Tracker',
  user,
  onLogout
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState({});
  const location = useLocation();

  const { subdomain } = useContext(appContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (key) => {
    setExpandedDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isAnyChildActive = (children) => {
    return children.some(child => location.pathname === child.to);
  };

  return (
    <>
      {/* External toggle button - positioned in the middle of the page when sidebar is closed */}
      {!isOpen && (
        <button
          type="button"
          className="md:hidden fixed top-1/2 left-0 z-20 p-2 rounded-r-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transform -translate-y-1/2 transition-all duration-300 hover:scale-110 animate-pulse"
          onClick={toggleSidebar}
        >
        <span className="sr-only">Open sidebar</span>
          <FaChevronRight className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Close toggle button - positioned outside the sidebar when open */}
      {isOpen && (
        <button
          type="button"
          className="fixed top-1/2 right-0 z-40 p-2 rounded-l-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transform -translate-y-1/2 transition-all duration-300 hover:scale-110 animate-bounce"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Close sidebar</span>
          <FaChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar - Improved responsive classes */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 transition-transform duration-300 ease-in-out transform overflow-y-auto md:overflow-y-scroll ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
      >
        {/* Logo - no close button in header */}
        <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-white truncate">{logoText}</span>
          </div>
        </div>

        {/* User profile */}
        {user && (
          <div className="px-4 py-5 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className='flex items-center min-w-0'>
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={user.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.username)}`}
                    alt={user.name || user.username}
                  />
                </div>
                <div className="ml-3 min-w-0">
                  <p className="text-base font-medium text-white truncate">{user.name || user.username}</p>
                  <p className="text-sm font-medium text-gray-400 truncate">{user.department || user.role} - {subdomain}</p>
                </div>
              </div>
              <div className="ml-3">
                {onLogout && <button 
                  className="font-medium text-white m-2 p-2 text-xl"
                  onClick={onLogout}
                >
                  <FiLogOut />
                </button>}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="mt-5 px-2 space-y-1">
          {links.map((link, index) => {
            // Handle header items
            if (link.isHeader) {
              return (
                <div key={`header-${index}`} className="pt-4 pb-2">
                  <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider truncate">
                    {link.label}
                  </h3>
                </div>
              );
            }
            
            // Handle dropdown items
            if (link.isDropdown) {
              const dropdownKey = `dropdown-${index}`;
              const isExpanded = expandedDropdowns[dropdownKey];
              const hasActiveChild = isAnyChildActive(link.children || []);
              
              return (
                <div key={dropdownKey}>
                  <button
                    onClick={() => toggleDropdown(dropdownKey)}
                    className={`
                      group flex items-center w-full px-2 py-2 text-base font-medium rounded-md 
                      hover:bg-gray-700 hover:text-white 
                      transition-all duration-300 
                      ${hasActiveChild 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-300'
                      }
                      hover:pl-4
                    `}
                  >
                    {link.icon && (
                      <span className="mr-3 h-6 w-6 flex items-center justify-center flex-shrink-0">
                        {link.icon}
                      </span>
                    )}
                    <span className="flex-1 text-left truncate">{link.label}</span>
                    {link.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 flex-shrink-0">
                        {link.badge}
                      </span>
                    )}
                    <span className="ml-2 flex-shrink-0">
                      {isExpanded ? 
                        <FaChevronUp className="h-4 w-4" /> : 
                        <FaChevronDown className="h-4 w-4" />
                      }
                    </span>
                  </button>
                  
                  {/* Dropdown children */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 space-y-1 mt-1">
                      {link.children?.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`
                            group flex items-center px-2 py-2 text-sm font-medium rounded-md 
                            hover:bg-gray-700 hover:text-white 
                            transition-all duration-300 
                            ${location.pathname === child.to 
                              ? 'bg-gray-700 text-white border-l-2 border-blue-500' 
                              : 'text-gray-400'
                            }
                            hover:pl-4
                          `}
                          onClick={closeSidebar}
                        >
                          {child.icon && (
                            <span className="mr-3 h-5 w-5 flex items-center justify-center flex-shrink-0">
                              {child.icon}
                            </span>
                          )}
                          <span className="flex-1 text-left truncate">{child.label}</span>
                          {child.badge && (
                            <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 flex-shrink-0">
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            
            // Handle regular navigation items
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  group flex items-center px-2 py-2 text-base font-medium rounded-md 
                  hover:bg-gray-700 hover:text-white 
                  transition-all duration-300 
                  ${location.pathname === link.to 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300'
                  }
                  hover:pl-4 // Slide effect
                `}
                onClick={closeSidebar}
              >
                {link.icon && (
                  <span className="mr-3 h-6 w-6 flex items-center justify-center flex-shrink-0">
                    {link.icon}
                  </span>
                )}
                <span className="flex-1 text-left truncate">{link.label}</span>
                {link.badge && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1 flex-shrink-0">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout button */}
        {/* {onLogout && (
          <div className="absolute bottom-0 w-full px-2 py-4 border-t border-gray-700">
            <button
              type="button"
              className="group flex items-center px-2 py-2 w-full text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <span className="mr-3 h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
              Logout
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Sidebar;