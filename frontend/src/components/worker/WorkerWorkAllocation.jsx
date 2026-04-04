import React, { useState, useEffect, useContext, useRef } from 'react';
import appContext from '../../context/AppContext';
import { useSocket } from '../../context/SocketContextNew';
import { getTickets, updateTicket } from '../../services/ticketService';
import Spinner from '../common/Spinner';
import { useAuth } from '../../hooks/useAuth';
import {
    Search, CheckSquare, AlertCircle, Bookmark, Zap, ArrowUp, ArrowDown,
    Minus, X, User, AlignLeft, Calendar
} from 'lucide-react';

const IssueIcon = ({ type }) => {
    switch (type) {
        case 'Bug': return <AlertCircle className="w-5 h-5 text-red-500" title="Bug" />;
        case 'Story': return <Bookmark className="w-5 h-5 text-teal-500" title="Story" />;
        case 'Epic': return <Zap className="w-5 h-5 text-purple-500" title="Epic" />;
        case 'Task':
        default: return <CheckSquare className="w-5 h-5 text-blue-500" title="Task" />;
    }
};

const PriorityIcon = ({ priority }) => {
    switch (priority) {
        case 'High': return <ArrowUp className="w-4 h-4 text-red-500" title="High Priority" />;
        case 'Medium': return <Minus className="w-4 h-4 text-orange-500" title="Medium Priority" />;
        case 'Low': return <ArrowDown className="w-4 h-4 text-blue-500" title="Low Priority" />;
        default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
};

const isOverdue = (endDate, status) => {
    if (!endDate || status === 'Done') return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    return end < today;
};

const WorkerWorkAllocation = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { subdomain } = useContext(appContext);
    const { user } = useAuth();
    const { socket } = useSocket();

    // Modal state
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [dragOverCol, setDragOverCol] = useState(null);
    const [touchDraggedTicket, setTouchDraggedTicket] = useState(null);

    const columns = ['To Do', 'In Progress', 'Review', 'Done'];

    useEffect(() => {
        if (user && user._id) {
            fetchData();
        }
    }, [subdomain, user]);

    // Socket listeners for real-time updates
    useEffect(() => {
        if (!socket || !user?._id) return;

        socket.on('ticket:created', (newTicket) => {
            // Only add if assigned to this worker
            if (newTicket.assignee?._id === user._id || newTicket.assignee === user._id) {
                setTickets(prev => {
                    if (prev.find(t => t._id === newTicket._id)) return prev;
                    return [newTicket, ...prev];
                });
            }
        });

        socket.on('ticket:updated', (updatedTicket) => {
            const isAssignedToMe = updatedTicket.assignee?._id === user._id || updatedTicket.assignee === user._id;

            setTickets(prev => {
                const alreadyExists = prev.find(t => t._id === updatedTicket._id);
                if (isAssignedToMe) {
                    if (alreadyExists) {
                        return prev.map(t => t._id === updatedTicket._id ? updatedTicket : t);
                    } else {
                        return [updatedTicket, ...prev];
                    }
                } else {
                    return prev.filter(t => t._id !== updatedTicket._id);
                }
            });

            // Also update selected ticket if it's the one open
            setSelectedTicket(prev => {
                if (prev && prev._id === updatedTicket._id) {
                    if (isAssignedToMe) return updatedTicket;
                    else {
                        setIsModalOpen(false);
                        return null;
                    }
                }
                return prev;
            });
        });

        socket.on('ticket:deleted', ({ id }) => {
            setTickets(prev => prev.filter(t => t._id !== id));
            if (selectedTicket?._id === id) {
                setIsModalOpen(false);
                setSelectedTicket(null);
            }
        });

        return () => {
            socket.off('ticket:created');
            socket.off('ticket:updated');
            socket.off('ticket:deleted');
        };
    }, [socket, user, selectedTicket]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const ticketsData = await getTickets({ subdomain, assignee: user._id });
            setTickets(ticketsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDragStart = (e, ticketId) => {
        e.dataTransfer.setData('ticketId', ticketId);
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => {
            const el = document.getElementById(ticketId);
            if (el) el.style.opacity = '0.5';
        }, 0);
    };

    const handleDragEnd = (e, ticketId) => {
        setDragOverCol(null);
        const el = document.getElementById(ticketId);
        if (el) el.style.opacity = '1';
    };

    const handleDragOver = (e, status) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (dragOverCol !== status) setDragOverCol(status);
    };

    const handleDragLeave = (e, status) => {
        e.preventDefault();
        if (dragOverCol === status) setDragOverCol(null);
    };

    // Touch Support for Mobile DND
    const handleTouchStart = (e, ticketId) => {
        setTouchDraggedTicket(ticketId);
        const el = document.getElementById(ticketId);
        if (el) el.style.opacity = '0.5';
    };

    const handleTouchMove = (e) => {
        if (!touchDraggedTicket) return;
        const touch = e.touches[0];
        const draggedEl = document.getElementById(touchDraggedTicket);
        if (draggedEl) draggedEl.style.pointerEvents = 'none';

        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        const column = target?.closest('[data-status]');

        if (draggedEl) draggedEl.style.pointerEvents = 'auto';

        if (column) {
            const status = column.getAttribute('data-status');
            if (dragOverCol !== status) setDragOverCol(status);
        } else {
            if (dragOverCol) setDragOverCol(null);
        }

        if (e.cancelable) e.preventDefault();
    };

    const handleTouchEnd = async (e) => {
        if (!touchDraggedTicket) return;
        const ticketId = touchDraggedTicket;
        const targetStatus = dragOverCol;

        const el = document.getElementById(ticketId);
        if (el) el.style.opacity = '1';

        if (targetStatus) {
            updateStatus(ticketId, targetStatus);
        }

        setTouchDraggedTicket(null);
        setDragOverCol(null);
    };

    const updateStatus = async (ticketId, targetStatus) => {
        const ticket = tickets.find(t => t._id === ticketId);
        if (!ticket || ticket.status === targetStatus) return;

        const updatedTickets = tickets.map(t =>
            t._id === ticketId ? { ...t, status: targetStatus } : t
        );
        setTickets(updatedTickets);

        try {
            await updateTicket(ticketId, { status: targetStatus, subdomain });
        } catch (error) {
            console.error('Error upgrading ticket:', error);
            fetchData();
        }
    };

    const handleDrop = async (e, targetStatus) => {
        e.preventDefault();
        setDragOverCol(null);
        const ticketId = e.dataTransfer.getData('ticketId');
        if (!ticketId) return;
        updateStatus(ticketId, targetStatus);
    };

    const toggleChecklistItem = async (index) => {
        const updatedChecklist = [...selectedTicket.checklist];
        updatedChecklist[index].completed = !updatedChecklist[index].completed;
        updatedChecklist[index].completedAt = updatedChecklist[index].completed ? new Date() : null;

        // Auto move to Done if all items are completed
        const allCompleted = updatedChecklist.every(item => item.completed);
        let updatedStatus = selectedTicket.status;
        if (allCompleted && updatedChecklist.length > 0) {
            updatedStatus = 'Done';
        }

        const updatedTicket = { ...selectedTicket, checklist: updatedChecklist, status: updatedStatus };
        setSelectedTicket(updatedTicket);
        setTickets(tickets.map(t => t._id === updatedTicket._id ? updatedTicket : t));

        try {
            await updateTicket(updatedTicket._id, {
                checklist: updatedChecklist,
                status: updatedStatus,
                subdomain
            });
        } catch (error) {
            console.error('Update failed', error);
            // Optionally revert local state here if critical
        }
    };

    const updateSelectedTicketStatus = async (status) => {
        const updatedTicket = { ...selectedTicket, status };
        setSelectedTicket(updatedTicket);
        setTickets(tickets.map(t => t._id === updatedTicket._id ? updatedTicket : t));

        try {
            await updateTicket(updatedTicket._id, { status, subdomain });
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    const filteredTickets = tickets.filter(t =>
        t.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <Spinner />;

    return (
        <div className="flex flex-col h-full bg-white text-gray-800">
            {/* Header Area */}
            <div className="p-4 md:p-6 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage and update status of your assigned tasks.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white gap-4 mb-2 pb-2">
                    <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                        <div className="relative w-full sm:w-48 border border-gray-300 rounded-lg focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 transition-all">
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-3 py-2 bg-transparent text-sm font-medium text-gray-700 outline-none"
                            />
                            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-sm text-red-500 hover:text-red-700 font-medium whitespace-nowrap px-2"
                            >
                                Clear search
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Kanban Board Area */}
            <div className="flex-1 overflow-x-auto px-4 md:px-6 py-2 bg-white pb-6 scroll-smooth">
                <div className="flex gap-4 md:gap-6 h-full min-h-[60vh] pb-4 w-max lg:w-full">
                    {columns.map(status => (
                        <div
                            key={status}
                            data-status={status}
                            className={`flex flex-col bg-gray-50/70 border border-gray-100 rounded-2xl w-[280px] md:w-[300px] lg:flex-1 max-h-full transition-all ${dragOverCol === status ? 'bg-teal-50 border-teal-200 border-dashed' : ''}`}
                            onDragOver={(e) => handleDragOver(e, status)}
                            onDragLeave={(e) => handleDragLeave(e, status)}
                            onDrop={(e) => handleDrop(e, status)}
                        >
                            <div className="px-5 pt-4 pb-3 flex justify-between items-center text-gray-700 border-b border-gray-100/50">
                                <h2 className="text-sm font-bold tracking-wide uppercase flex items-center gap-2">
                                    {status}
                                    <span className="font-semibold text-xs bg-white text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full shadow-sm">
                                        {filteredTickets.filter(t => t.status === status).length}
                                    </span>
                                </h2>
                            </div>

                            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 custom-scrollbar">
                                {filteredTickets.filter(t => t.status === status).map(ticket => (
                                    <div
                                        key={ticket._id}
                                        id={ticket._id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, ticket._id)}
                                        onDragEnd={(e) => handleDragEnd(e, ticket._id)}
                                        onTouchStart={(e) => handleTouchStart(e, ticket._id)}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd}
                                        onClick={() => { setSelectedTicket(ticket); setIsModalOpen(true); }}
                                        className={`p-4 rounded-xl shadow-sm border cursor-pointer hover:shadow-md hover:border-teal-100 active:cursor-grabbing transition-all group active:scale-[0.98] 
                                            ${isOverdue(ticket.endDate, ticket.status) ? 'bg-red-50 border-red-200' : 'bg-white border-gray-100'} 
                                            ${ticket.issueType === 'Bug' ? 'border-l-4 border-l-red-500' : ticket.issueType === 'Story' ? 'border-l-4 border-l-teal-500' : ticket.issueType === 'Epic' ? 'border-l-4 border-l-purple-500' : 'border-l-4 border-l-blue-500'}`}
                                    >
                                        <div className="flex gap-2 mb-1 flex-wrap">
                                            {ticket.labels && ticket.labels.map(lbl => (
                                                <span key={lbl} className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">{lbl}</span>
                                            ))}
                                            {(ticket.startDate || ticket.endDate) && (
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider flex items-center gap-1 border 
                                                    ${isOverdue(ticket.endDate, ticket.status) ? 'bg-red-100 text-red-700 border-red-200' : 'bg-teal-50 text-teal-600 border-teal-100'}`}>
                                                    <Calendar className="w-2.5 h-2.5" />
                                                    {ticket.startDate ? new Date(ticket.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'TBD'} - {ticket.endDate ? new Date(ticket.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : 'TBD'}
                                                </span>
                                            )}
                                        </div>

                                        <div className="text-sm font-medium text-gray-800 leading-snug mb-3 group-hover:text-teal-700 transition-colors">
                                            {ticket.title}
                                        </div>

                                        {ticket.checklist && ticket.checklist.length > 0 && (
                                            <div className="mb-4">
                                                <div className="flex justify-between items-center mb-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                    <span>My Progress</span>
                                                    <span>{Math.round((ticket.checklist.filter(i => i.completed).length / ticket.checklist.length) * 100)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-1 shadow-inner">
                                                    <div
                                                        className="bg-teal-500 h-1 rounded-full transition-all duration-300 shadow-sm"
                                                        style={{ width: `${(ticket.checklist.filter(i => i.completed).length / ticket.checklist.length) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2 mb-4 lg:hidden">
                                            {status !== 'To Do' && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const prevStatus = columns[columns.indexOf(status) - 1];
                                                        updateStatus(ticket._id, prevStatus);
                                                    }}
                                                    className="flex-1 py-1.5 bg-gray-50 text-gray-500 rounded-lg border border-gray-100 text-[10px] font-bold uppercase tracking-wider"
                                                >
                                                    Move Back
                                                </button>
                                            )}
                                            {status !== 'Done' && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const nextStatus = columns[columns.indexOf(status) + 1];
                                                        updateStatus(ticket._id, nextStatus);
                                                    }}
                                                    className="flex-1 py-1.5 bg-teal-50 text-teal-700 rounded-lg border border-teal-100 text-[10px] font-bold uppercase tracking-wider"
                                                >
                                                    Move Next
                                                </button>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-center mt-auto">
                                            <div className="flex items-center space-x-1.5">
                                                <IssueIcon type={ticket.issueType} />
                                                <span className="text-xs font-semibold text-gray-500">{ticket.issueType}</span>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                {ticket.storyPoints > 0 && (
                                                    <span className="bg-gray-100 text-gray-600 text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center -mr-1 shadow-inner">
                                                        {ticket.storyPoints}
                                                    </span>
                                                )}
                                                <div className="bg-gray-50 rounded-md p-1 shadow-sm">
                                                    <PriorityIcon priority={ticket.priority} />
                                                </div>
                                                <div className="px-2 py-1 rounded bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-bold border border-teal-100 shadow-sm">
                                                    {ticket.assignee ? ticket.assignee.name : <span className="flex items-center text-gray-500"><User className="w-3.5 h-3.5 mr-1" /> Unassigned</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Detail Modal */}
            {isModalOpen && selectedTicket && (
                <div className="fixed inset-0 bg-black/40 z-[100] flex flex-col items-center justify-center sm:p-6 backdrop-blur-sm transition-opacity">
                    <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-5xl h-[95vh] sm:h-[85vh] flex flex-col mt-auto sm:mt-0 overflow-hidden">

                        {/* Header */}
                        <div className="px-6 py-4 flex justify-between items-center text-gray-600 shrink-0 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center space-x-2 text-sm font-semibold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
                                <IssueIcon type={selectedTicket.issueType} />
                                <span className="uppercase text-gray-700">{selectedTicket.issueType}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors bg-gray-100">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col md:flex-row flex-1 overflow-hidden font-sans">
                            {/* Main Content Area */}
                            <div className="w-full md:w-[65%] overflow-y-auto px-6 py-6 md:border-r border-gray-100 custom-scrollbar">
                                <h2 className="w-full text-2xl font-bold text-gray-800 p-3 -ml-3 mb-6">
                                    {selectedTicket.title}
                                </h2>

                                <div className="mb-6">
                                    <label className="text-sm font-bold text-gray-700 flex items-center mb-3">
                                        <AlignLeft className="w-4 h-4 mr-2 text-gray-400" /> Description
                                    </label>
                                    <div className="w-full min-h-[10rem] bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
                                        {selectedTicket.checklist && selectedTicket.checklist.length > 0 ? (
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                                                    <span className="text-sm font-bold text-gray-500">
                                                        Progress: <span className="text-teal-600">{selectedTicket.checklist.filter(i => i.completed).length} / {selectedTicket.checklist.length}</span> completed
                                                    </span>
                                                    <span className="text-sm font-extrabold text-teal-600">
                                                        {Math.round((selectedTicket.checklist.filter(i => i.completed).length / selectedTicket.checklist.length) * 100)}%
                                                    </span>
                                                </div>

                                                <div className="w-full bg-gray-200 rounded-full h-2 mb-6 shadow-inner">
                                                    <div
                                                        className="bg-teal-500 h-2 rounded-full transition-all duration-500 shadow-sm"
                                                        style={{ width: `${(selectedTicket.checklist.filter(i => i.completed).length / selectedTicket.checklist.length) * 100}%` }}
                                                    ></div>
                                                </div>

                                                <ul className="space-y-3">
                                                    {selectedTicket.checklist.map((item, idx) => (
                                                        <li key={idx} className="flex items-start group">
                                                            <div className="flex items-center h-6">
                                                                <input
                                                                    id={`item-${idx}`}
                                                                    name={`item-${idx}`}
                                                                    type="checkbox"
                                                                    checked={item.completed}
                                                                    onChange={() => toggleChecklistItem(idx)}
                                                                    className="h-4.5 w-4.5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded cursor-pointer transition-colors shadow-sm"
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm leading-6">
                                                                <label
                                                                    htmlFor={`item-${idx}`}
                                                                    className={`font-semibold cursor-pointer transition-all ${item.completed ? 'text-gray-400 line-through' : 'text-gray-700 hover:text-teal-700'}`}
                                                                >
                                                                    {item.text}
                                                                </label>
                                                                {item.completed && item.completedAt && (
                                                                    <p className="text-[10px] text-gray-400 font-medium">Completed on {new Date(item.completedAt).toLocaleString()}</p>
                                                                )}
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <div className="whitespace-pre-wrap leading-relaxed italic text-gray-500 font-medium">
                                                {selectedTicket.description || 'No description provided.'}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Details Area */}
                            <div className="w-full md:w-[35%] overflow-y-auto p-6 md:p-8 text-sm bg-gray-50/30 border-t md:border-t-0 custom-scrollbar">
                                <div className="space-y-6">

                                    <div>
                                        <select
                                            value={selectedTicket.status}
                                            onChange={(e) => updateSelectedTicketStatus(e.target.value)}
                                            className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 text-xs font-bold rounded-lg p-2.5 pr-8 focus:ring-2 focus:ring-teal-500 appearance-none uppercase transition-colors cursor-pointer outline-none"
                                            style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2em' }}
                                        >
                                            {columns.map(status => (
                                                <option key={status} value={status}>{status}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-gray-800">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Properties</h3>

                                        <div className="space-y-5">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <span className="w-24 text-gray-500 font-semibold text-xs uppercase">Assignee</span>
                                                <div className="flex-1 font-medium bg-gray-50 border border-gray-200 p-2 rounded-lg text-sm text-gray-700">
                                                    {selectedTicket.assignee ? selectedTicket.assignee.name : 'Unassigned'}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <span className="w-24 text-gray-500 font-semibold text-xs uppercase">Type</span>
                                                <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700">
                                                    <IssueIcon type={selectedTicket.issueType} />
                                                    <span className="font-medium">{selectedTicket.issueType}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <span className="w-24 text-gray-500 font-semibold text-xs uppercase">Priority</span>
                                                <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700">
                                                    <PriorityIcon priority={selectedTicket.priority} />
                                                    <span className="font-medium">{selectedTicket.priority}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-gray-100">
                                                <span className="w-24 text-gray-500 font-semibold text-xs uppercase">Story Pts</span>
                                                <div className="flex-1 font-medium bg-gray-50 border border-gray-200 p-2 rounded-lg text-sm text-gray-700">
                                                    {selectedTicket.storyPoints || 0}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <span className="w-24 text-gray-500 font-semibold text-xs uppercase">Labels</span>
                                                <div className="flex-1 font-medium bg-gray-50 border border-gray-200 p-2 rounded-lg text-sm text-gray-700">
                                                    {selectedTicket.labels?.join(', ') || 'None'}
                                                </div>
                                            </div>

                                            <div className="pt-2 border-t border-gray-100">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider mb-2 block">Scheduling</span>
                                                <div className="space-y-3">
                                                    <div className="flex flex-col gap-1.5">
                                                        <span className="text-[11px] text-gray-500 font-semibold">Start Date</span>
                                                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-700">
                                                            <Calendar className="w-4 h-4 text-gray-400" />
                                                            <span className="font-medium">{selectedTicket.startDate ? new Date(selectedTicket.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not set'}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <span className="text-[11px] text-gray-500 font-semibold">End Date</span>
                                                        <div className={`flex items-center gap-2 border rounded-lg p-2 text-sm ${isOverdue(selectedTicket.endDate, selectedTicket.status) ? 'bg-red-50 border-red-200 text-red-700' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                                                            <Calendar className={`w-4 h-4 ${isOverdue(selectedTicket.endDate, selectedTicket.status) ? 'text-red-500' : 'text-gray-400'}`} />
                                                            <span className="font-medium">{selectedTicket.endDate ? new Date(selectedTicket.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not set'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {selectedTicket.createdAt && (
                                        <div className="text-xs font-medium text-gray-400 space-y-1.5 pt-4 text-center md:text-left">
                                            <p>Created on {new Date(selectedTicket.createdAt).toLocaleDateString()}</p>
                                            <p>Last edited {new Date(selectedTicket.updatedAt).toLocaleDateString()}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Scrollbar Styles appended for webkit */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #94a3b8;
                }
            `}} />
        </div>
    );
};

export default WorkerWorkAllocation;
