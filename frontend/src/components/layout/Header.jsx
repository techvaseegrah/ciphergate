import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaCheckDouble, FaCog, FaBellSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../context/NotificationContext';
import { Bell, CheckCircle2, AlertCircle, Clock, MoreVertical, Settings2, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import AdminMobileMenu from './AdminMobileMenu';

const Header = ({ user, menuLinks = [], sidebarLinks = [], onLogout, isAdmin = false, onMenuClick }) => {
    const { notifications, unreadCount, markAsRead, settings, updateSettings } = useNotification();
    const [isOpen, setIsOpen] = useState(false);
    const [is3DotOpen, setIs3DotOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dotMenuRef = useRef(null);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (dotMenuRef.current && !dotMenuRef.current.contains(event.target)) {
                setIs3DotOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNotificationClick = (notification) => {
        markAsRead(notification._id);
        setIsOpen(false);
        if (notification.link) {
            navigate(notification.link);
        }
    };

    return (
        <header className="h-16 flex justify-between md:justify-end items-center px-4 md:px-10 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm sticky top-0 z-[100]">
            <div className="flex items-center gap-2 md:hidden">
                {isAdmin && (
                    <button
                        onClick={onMenuClick}
                        className="p-2 -ml-2 rounded-xl text-slate-600 active:bg-slate-50 transition-all"
                    >
                        <Menu size={24} />
                    </button>
                )}
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="font-black text-slate-900 tracking-tight text-lg">CipherGate</span>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                {/* 3-Dot Menu for Employees ONLY */}
                {!isAdmin && (
                    <div className="relative md:hidden" ref={dotMenuRef}>
                        <button
                            onClick={() => setIs3DotOpen(!is3DotOpen)}
                            className={`p-2 rounded-xl transition-all duration-300 ${is3DotOpen ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <MoreVertical size={20} />
                        </button>

                        <AnimatePresence>
                            {is3DotOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[110]"
                                >
                                    <div className="p-2 space-y-1">
                                        {menuLinks.length > 0 ? (
                                            menuLinks.map((link, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        navigate(link.to);
                                                        setIs3DotOpen(false);
                                                    }}
                                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-xl transition-all active:scale-95"
                                                >
                                                    <span className="text-lg opacity-70">{link.icon}</span>
                                                    <span>{link.label}</span>
                                                    {link.badge && (
                                                        <span className="ml-auto bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full">
                                                            {link.badge}
                                                        </span>
                                                    )}
                                                </button>
                                            ))
                                        ) : (
                                            <div className="px-4 py-3 text-xs text-slate-400 text-center font-bold italic">
                                                No additional modules
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-teal-50 text-teal-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                    >
                        <Bell className={`w-5 h-5 ${unreadCount > 0 ? 'animate-wiggle' : ''}`} />
                        {unreadCount > 0 && (
                            <span className="absolute top-1 right-1 inline-flex items-center justify-center w-4 h-4 text-[9px] font-black text-white bg-rose-500 rounded-full border-2 border-white shadow-sm">
                                {unreadCount > 9 ? '9+' : unreadCount}
                            </span>
                        )}
                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="fixed inset-x-4 top-16 sm:absolute sm:inset-x-auto sm:right-0 sm:mt-3 w-auto sm:w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[110] border border-slate-100"
                            >
                                <div className="py-4 px-5 bg-white flex justify-between items-center border-b border-slate-50">
                                    <div>
                                        <h3 className="font-black text-slate-900 text-sm tracking-tight uppercase">Notifications</h3>
                                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-0.5">Alert Center</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => updateSettings({ pushEnabled: !settings.pushEnabled })}
                                            className={`p-2 rounded-lg transition-colors ${settings.pushEnabled ? 'text-teal-600 hover:bg-teal-50' : 'text-slate-300 hover:bg-slate-50'}`}
                                        >
                                            {settings.pushEnabled ? <Bell className="w-4 h-4" /> : <FaBellSlash className="w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={() => markAsRead('all')}
                                            className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                                        >
                                            <FaCheckDouble className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="max-h-[400px] overflow-y-auto custom-scrollbar bg-slate-50/30">
                                    {notifications.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center py-12 px-6">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-3 border border-slate-100 shadow-sm">
                                                <Bell className="w-6 h-6 text-slate-200" />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No notifications</p>
                                        </div>
                                    ) : (
                                        <div className="divide-y divide-slate-50">
                                            {notifications.map((notification) => {
                                                let iconBg = 'bg-teal-50';
                                                let iconColor = 'text-teal-500';
                                                let Icon = Bell;

                                                if (notification.type?.includes('proof')) {
                                                    if (notification.type.includes('rejected')) {
                                                        iconBg = 'bg-rose-50';
                                                        iconColor = 'text-rose-500';
                                                        Icon = AlertCircle;
                                                    } else {
                                                        iconBg = 'bg-emerald-50';
                                                        iconColor = 'text-emerald-500';
                                                        Icon = CheckCircle2;
                                                    }
                                                }

                                                return (
                                                    <div
                                                        key={notification._id}
                                                        onClick={() => handleNotificationClick(notification)}
                                                        className={`px-5 py-4 cursor-pointer hover:bg-white transition-all group relative ${notification.isRead ? 'opacity-60' : 'bg-teal-50/20'}`}
                                                    >
                                                        <div className="flex gap-4">
                                                            <div className={`shrink-0 w-10 h-10 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center border border-white shadow-sm group-hover:scale-110 transition-transform`}>
                                                                <Icon size={18} strokeWidth={2.5} />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex justify-between items-start mb-0.5">
                                                                    <h4 className="text-sm font-bold text-slate-800 truncate pr-4">{notification.title}</h4>
                                                                    <span className="text-[9px] font-black text-slate-400 whitespace-nowrap bg-white px-2 py-0.5 rounded-full border border-slate-100">
                                                                        {new Date(notification.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                    </span>
                                                                </div>
                                                                <p className="text-[11px] font-semibold text-slate-500 leading-relaxed mt-1 line-clamp-2">
                                                                    {notification.message}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {user && (
                    <div className="flex items-center pl-2 md:pl-4 border-l border-slate-100 ml-1 md:ml-4 relative" ref={profileRef}>
                        <div className="flex flex-col items-end mr-2 md:mr-3 hidden sm:flex">
                            <span className="text-xs font-black text-slate-800 leading-none">{user.name || 'User'}</span>
                            <span className="text-[9px] font-black text-teal-600 uppercase tracking-widest mt-1">{user.role || 'Member'}</span>
                        </div>
                        
                        <button 
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className={`h-8 w-8 md:h-9 md:w-9 rounded-xl bg-gradient-to-br from-[#0d9488] to-[#0f766e] text-white flex items-center justify-center font-black shadow-lg shadow-teal-100 border-2 border-white relative group overflow-hidden transition-all active:scale-95 ${isProfileOpen ? 'ring-2 ring-teal-500 ring-offset-2' : ''}`}
                        >
                            <span className="relative z-10 text-[10px] md:text-xs">{user.name ? user.name.charAt(0).toUpperCase() : 'U'}</span>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 mt-2 top-full w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[110]"
                                >
                                    <div className="p-4 border-b border-slate-50 bg-slate-50/30">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-black text-sm">
                                                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-black text-slate-900 truncate">{user.displayName || user.name}</p>
                                                <p className="text-[10px] text-teal-600 font-black uppercase tracking-widest truncate">{user.role || 'Member'}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-2 space-y-1">
                                        <button 
                                            onClick={() => {
                                                navigate(isAdmin ? '/admin/settings' : '/worker/profile');
                                                setIsProfileOpen(false);
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#0d9488] rounded-xl transition-all"
                                        >
                                            <Settings2 size={18} className="opacity-70" />
                                            <span>Profile Settings</span>
                                        </button>
                                        
                                        <div className="h-px bg-slate-50 mx-2" />
                                        
                                        <button 
                                            onClick={() => {
                                                setIsProfileOpen(false);
                                                onLogout();
                                            }}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                                        >
                                            <MoreVertical size={18} className="rotate-90 opacity-70" />
                                            <span>Logout Session</span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>



            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                }
                .animate-wiggle {
                    animation: wiggle 0.5s ease-in-out infinite;
                }
                `
            }} />
        </header>
    );
};

export default Header;
