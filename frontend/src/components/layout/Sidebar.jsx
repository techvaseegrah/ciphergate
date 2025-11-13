import { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import appContext from '../../context/AppContext';
import ShatteredLogo from '../common/ShatteredLogo';
import { motion } from 'framer-motion';

const Sidebar = ({
  links,
  logoText = 'Task Tracker',
  user,
  onLogout
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState({});
  const [showFullLogo, setShowFullLogo] = useState(false);
  const [triggerLogoAnimation, setTriggerLogoAnimation] = useState(false);
  const location = useLocation();

  const { subdomain } = useContext(appContext);

  // Trigger logo animation when component mounts
  useEffect(() => {
    // Show shattered logo for 2 seconds
    const logoTimer = setTimeout(() => {
      setShowFullLogo(true);
    }, 2000);
    
    return () => clearTimeout(logoTimer);
  }, []);

  // Trigger logo animation when sidebar opens
  useEffect(() => {
    if (isOpen) {
      setTriggerLogoAnimation(prev => !prev);
      setShowFullLogo(false);
      
      // Reset showFullLogo after animation completes
      const resetTimer = setTimeout(() => {
        setShowFullLogo(true);
      }, 2000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [isOpen]);

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
          className="md:hidden fixed top-1/2 left-0 z-20 p-2 rounded-r-full text-black bg-white/90 backdrop-blur-lg hover:bg-theme-red hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transform -translate-y-1/2 transition-all duration-300 hover:scale-110 animate-pulse"
          onClick={toggleSidebar}
        >
      <span className="sr-only">Open sidebar</span>
          <FaChevronRight className="h-6 w-6 sidebar-toggle-animated" />
        </button>
      )}

      {/* Sidebar Backdrop with blur effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Close toggle button - positioned outside the sidebar when open */}
      {isOpen && (
        <button
          type="button"
          className="fixed top-1/2 right-0 z-40 p-2 rounded-l-full text-black bg-white/90 backdrop-blur-lg hover:bg-theme-red hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transform -translate-y-1/2 transition-all duration-300 hover:scale-110 animate-bounce"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Close sidebar</span>
          <FaChevronLeft className="h-6 w-6 sidebar-toggle-animated" />
        </button>
      )}

      {/* Sidebar with Apple-style blur effect */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white/90 backdrop-blur-lg transition-transform duration-300 ease-in-out transform overflow-y-auto md:overflow-y-scroll rounded-r-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
      >
        {/* Logo section with smooth transition */}
        <div className="flex flex-col items-center justify-center h-20 px-2 bg-white/80 backdrop-blur-sm border-b border-gray-200 rounded-tr-2xl">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <ShatteredLogo 
                triggerAnimation={triggerLogoAnimation}
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full" 
                onComplete={() => console.log('Shattering animation complete')}
              />
            </div>
            
            {/* Animated text that appears after logo reassembly */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ 
                opacity: showFullLogo ? 1 : 0, 
                width: showFullLogo ? 'auto' : 0 
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="ml-3 overflow-hidden"
            >
              <motion.h1 
                className="text-lg font-bold text-black whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: showFullLogo ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {logoText}
              </motion.h1>
            </motion.div>
          </div>
        </div>

        {/* User profile */}
        {user && (
          <div className="px-4 py-3 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className='flex items-center min-w-0'>
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.username)}`}
                    alt={user.name || user.username}
                  />
                </div>
                <div className="ml-2 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{user.name || user.username}</p>
                  <p className="text-xs font-medium text-gray-600 truncate">{user.department || user.role} - {subdomain}</p>
                </div>
              </div>
              <div className="ml-2">
                {onLogout && <button 
                  className="font-medium text-black p-1 text-lg hover:text-theme-red transition-colors duration-200"
                  onClick={onLogout}
                >
                  <FiLogOut />
                </button>}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Links - Updated with new theme and hover effects */}
        <nav className="mt-3 px-2 space-y-1">
          {links.map((link, index) => {
            // Handle header items
            if (link.isHeader) {
              return (
                <div key={`header-${index}`} className="pt-4 pb-2">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider truncate">
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
                      group flex items-center w-full px-2 py-2 text-base font-medium rounded-full 
                      transition-all duration-300 
                      ${hasActiveChild 
                        ? 'bg-theme-red text-white' 
                        : 'text-black hover:bg-gray-100'
                      }
                    `}
                  >
                    {link.icon && (
                      <span className="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-white flex-shrink-0 transition-all duration-300">
                        {link.icon}
                      </span>
                    )}
                    <span className="flex-1 text-left truncate">{link.label}</span>
                    {link.badge && (
                      <span className="ml-2 bg-theme-red text-white text-xs rounded-full px-2 py-1 flex-shrink-0">
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
                            group flex items-center px-2 py-2 text-sm font-medium rounded-full 
                            transition-all duration-300 
                            ${location.pathname === child.to 
                              ? 'bg-theme-red text-white border-l-2 border-white' 
                              : 'text-black hover:bg-gray-100'
                            }
                          `}
                          onClick={closeSidebar}
                        >
                          {child.icon && (
                            <span className="mr-3 h-6 w-6 flex items-center justify-center rounded-full bg-white flex-shrink-0 transition-all duration-300">
                              {child.icon}
                            </span>
                          )}
                          <span className="flex-1 text-left truncate">{child.label}</span>
                          {child.badge && (
                            <span className="ml-2 bg-theme-red text-white text-xs rounded-full px-2 py-1 flex-shrink-0">
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
                  group flex items-center px-2 py-2 text-base font-medium rounded-full 
                  transition-all duration-300 
                  ${location.pathname === link.to 
                    ? 'bg-theme-red text-white' 
                    : 'text-black hover:bg-gray-100'
                  }
                `}
                onClick={closeSidebar}
              >
                {link.icon && (
                  <span className="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-white flex-shrink-0 transition-all duration-300">
                    {link.icon}
                  </span>
                )}
                <span className="flex-1 text-left truncate">{link.label}</span>
                {link.badge && (
                  <span className="ml-2 bg-theme-red text-white text-xs rounded-full px-2 py-1 flex-shrink-0">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;