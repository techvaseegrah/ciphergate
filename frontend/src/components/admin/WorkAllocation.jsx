import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import appContext from '../../context/AppContext';
import { useSocket } from '../../context/SocketContextNew';
import { getTickets, createTicket, updateTicket, deleteTicket } from '../../services/ticketService';
import { getWorkers } from '../../services/workerService';
import Spinner from '../common/Spinner';
import {
    Search, Plus, Trash2, CheckSquare,
    AlertCircle, Bookmark, Zap, ArrowUp, ArrowDown,
    Minus, X, User, AlignLeft, LayoutDashboard, Flag, List, ListOrdered,
    Calendar, Clock, Check, ChevronDown, BarChart2
} from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

const getTicketKey = (id) => id ? `CG-${id.substring(id.length - 4).toUpperCase()}` : '';

const isOverdue = (endDate, status) => {
    if (!endDate || status === 'Done') return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    return end < today;
};

const WorkAllocation = () => {
    const [tickets, setTickets] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterAssignee, setFilterAssignee] = useState('');
    const [filterTeam, setFilterTeam] = useState('');
    const [filterPriority, setFilterPriority] = useState('');
    const [modalFilterTeam, setModalFilterTeam] = useState('');
    const { subdomain } = useContext(appContext);
    const { socket } = useSocket();
    const saveTimeoutRef = useRef(null);

    // Modal state
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Inline creation state
    const [inlineCreateStatus, setInlineCreateStatus] = useState(null);
    const [inlineTitle, setInlineTitle] = useState('');

    const [dragOverCol, setDragOverCol] = useState(null);
    const [touchDraggedTicket, setTouchDraggedTicket] = useState(null);

    // Delete Confirmation State
    const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, ticket: null });
    const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

    const columns = ['To Do', 'In Progress', 'Review', 'Done'];

    useEffect(() => { fetchData(); }, [subdomain]);

    // Socket listeners for real-time updates
    useEffect(() => {
        if (!socket) return;

        socket.on('ticket:created', (newTicket) => {
            setTickets(prev => {
                if (prev.find(t => t._id === newTicket._id)) return prev;
                return [newTicket, ...prev];
            });
        });

        socket.on('ticket:updated', (updatedTicket) => {
            setTickets(prev => prev.map(t => t._id === updatedTicket._id ? updatedTicket : t));
            // Also update selected ticket if it's the one open
            setSelectedTicket(prev => (prev && prev._id === updatedTicket._id) ? updatedTicket : prev);
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
    }, [socket, selectedTicket]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [ticketsData, workersData] = await Promise.all([
                getTickets({ subdomain }),
                getWorkers({ subdomain })
            ]);
            setTickets(ticketsData);
            setWorkers(workersData);
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
        // We need to temporarily disable pointer events on the dragged element
        // so that elementFromPoint can see what's underneath it.
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

        // Prevent page scroll while dragging
        if (e.cancelable) e.preventDefault();
    };

    const handleTouchEnd = async (e) => {
        if (!touchDraggedTicket) return;
        const ticketId = touchDraggedTicket;
        const targetStatus = dragOverCol;

        const el = document.getElementById(ticketId);
        if (el) el.style.opacity = '1';

        if (targetStatus) {
            const ticket = tickets.find(t => t._id === ticketId);
            if (ticket && ticket.status !== targetStatus) {
                updateStatus(ticketId, targetStatus);
            }
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

    const saveInlineTicket = async (status) => {
        if (!inlineTitle.trim()) {
            setInlineCreateStatus(null);
            return;
        }
        try {
            const newTicket = await createTicket({
                title: inlineTitle,
                status,
                subdomain,
                issueType: 'Task',
                priority: 'Medium'
            });
            setTickets([newTicket, ...tickets]);
        } catch (e) {
            console.error(e);
        }
        setInlineTitle('');
        setInlineCreateStatus(null);
    };

    const updateSelectedTicket = async (updates, debounce = false) => {
        // If assignee is being updated as an ID, resolve the full worker object for local UI state
        if (updates.hasOwnProperty('assignee') && typeof updates.assignee === 'string' && updates.assignee !== 'all') {
            const worker = workers.find(w => w._id === updates.assignee);
            updates.assignee = worker || null;
        }

        const updatedTicket = { ...selectedTicket, ...updates };
        setSelectedTicket(updatedTicket);

        // Update local tickets list immediately for snappy UI
        if (updatedTicket._id !== 'new') {
            // NOTE: We don't support 'all' for existing tickets via individual update as it would be ambiguous.
            // If admin selects 'all' for an existing ticket, we should probably handle it differently or ignore it.
            // For now, let's allow it but the API call might fail or we should handle it.
            if (updates.assignee === 'all') return;

            setTickets(tickets.map(t => t._id === updatedTicket._id ? updatedTicket : t));

            const performUpdate = async () => {
                try {
                    // When sending to API, use only the ID for the assignee
                    const apiUpdates = { ...updates };
                    if (apiUpdates.assignee && typeof apiUpdates.assignee === 'object') {
                        apiUpdates.assignee = apiUpdates.assignee._id;
                    }
                    await updateTicket(updatedTicket._id, { ...apiUpdates, subdomain });
                } catch (error) {
                    console.error('Update failed', error);
                }
            };

            if (debounce) {
                if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
                saveTimeoutRef.current = setTimeout(performUpdate, 1000);
            } else {
                performUpdate();
            }
        }
    };

    const updateChecklistItemText = (index, newText) => {
        const updatedChecklist = [...(selectedTicket.checklist || [])];
        if (updatedChecklist[index]) {
            updatedChecklist[index].text = newText;
            // Use debounce for text updates
            updateSelectedTicket({ checklist: updatedChecklist }, true);
        }
    };

    const addChecklistItem = (index) => {
        const updatedChecklist = [...(selectedTicket.checklist || [])];
        const newItem = { text: '', completed: false };
        if (typeof index === 'number') {
            updatedChecklist.splice(index + 1, 0, newItem);
        } else {
            updatedChecklist.push(newItem);
        }
        updateSelectedTicket({ checklist: updatedChecklist }, true);
    };

    const removeChecklistItem = (index) => {
        const updatedChecklist = [...(selectedTicket.checklist || [])];
        if (updatedChecklist.length <= 1) {
            updatedChecklist[0] = { text: '', completed: false };
        } else {
            updatedChecklist.splice(index, 1);
        }
        updateSelectedTicket({ checklist: updatedChecklist }, false);
    };

    const toggleChecklistItem = async (index) => {
        const updatedChecklist = [...(selectedTicket.checklist || [])];
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

        if (updatedTicket._id !== 'new') {
            setTickets(tickets.map(t => t._id === updatedTicket._id ? updatedTicket : t));
            try {
                await updateTicket(updatedTicket._id, {
                    checklist: updatedChecklist,
                    status: updatedStatus,
                    subdomain
                });
            } catch (error) {
                console.error('Update failed', error);
                fetchData();
            }
        }
    };

    const handleDeleteTicket = (ticketToDelete = selectedTicket) => {
        if (!ticketToDelete || ticketToDelete._id === 'new') return;
        setDeleteConfirm({ isOpen: true, ticket: ticketToDelete });
    };

    const executeDelete = async () => {
        const ticketToDelete = deleteConfirm.ticket;
        if (!ticketToDelete) return;

        try {
            await deleteTicket(ticketToDelete._id);
            setTickets(tickets.filter(t => t._id !== ticketToDelete._id));
            if (isModalOpen && selectedTicket?._id === ticketToDelete._id) {
                setIsModalOpen(false);
                setSelectedTicket(null);
            }
            setDeleteConfirm({ isOpen: false, ticket: null });
        } catch (e) {
            console.error(e);
        }
    };

    const filteredTickets = tickets.filter(t => {
        const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesAssignee = filterAssignee === 'unassigned'
            ? !t.assignee
            : filterAssignee
                ? t.assignee?._id === filterAssignee
                : true;

        const matchesPriority = filterPriority ? t.priority === filterPriority : true;

        let matchesTeam = true;
        if (filterTeam) {
            if (filterTeam === 'unassigned') {
                matchesTeam = !t.assignee;
            } else {
                const assigneeWorker = workers.find(w => w._id === t.assignee?._id);
                matchesTeam = assigneeWorker && assigneeWorker.department === filterTeam;
            }
        }

        return matchesSearch && matchesAssignee && matchesPriority && matchesTeam;
    });

    if (loading) return <Spinner />;

    return (
        <div className="flex flex-col h-full bg-white text-gray-800">
            {/* Header Area */}
            <div className="p-4 md:p-6 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Work Allocation</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage and assign tasks efficiently seamlessly.</p>
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

                        <div className="w-full sm:w-auto">
                            <Select value={filterAssignee} onValueChange={(val) => setFilterAssignee(val === "all_assignees" ? "" : val)}>
                                <SelectTrigger className="w-full sm:w-[160px] bg-white border-gray-300 shadow-sm">
                                    <SelectValue placeholder="All Employees" />
                                </SelectTrigger>
                                <SelectContent className="z-[200]">
                                    <SelectItem value="all_assignees">All Employees</SelectItem>
                                    <SelectItem value="unassigned">Unassigned Tasks</SelectItem>
                                    {workers.map(w => (
                                        <SelectItem key={w._id} value={w._id}>{w.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full sm:w-auto">
                            <Select value={filterTeam} onValueChange={(val) => setFilterTeam(val === "all_teams" ? "" : val)}>
                                <SelectTrigger className="w-full sm:w-[150px] bg-white border-gray-300 shadow-sm">
                                    <SelectValue placeholder="All Teams" />
                                </SelectTrigger>
                                <SelectContent className="z-[200]">
                                    <SelectItem value="all_teams">All Teams</SelectItem>
                                    {[...new Set(workers.map(w => w.department).filter(Boolean))].map(team => (
                                        <SelectItem key={team} value={team}>{team}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="w-full sm:w-auto">
                            <Select value={filterPriority} onValueChange={(val) => setFilterPriority(val === "all_priorities" ? "" : val)}>
                                <SelectTrigger className="w-full sm:w-[140px] bg-white border-gray-300 shadow-sm">
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent className="z-[200]">
                                    <SelectItem value="all_priorities">All Priorities</SelectItem>
                                    <SelectItem value="High">High</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {(filterAssignee || filterTeam || filterPriority || searchTerm) && (
                            <button
                                onClick={() => {
                                    setFilterAssignee('');
                                    setFilterTeam('');
                                    setFilterPriority('');
                                    setSearchTerm('');
                                }}
                                className="text-sm text-red-500 hover:text-red-700 font-medium whitespace-nowrap px-2"
                            >
                                Clear all
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                            onClick={() => setIsStatsModalOpen(true)}
                            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-3 rounded-lg flex items-center text-sm transition-all border border-gray-300 shadow-sm w-full sm:w-auto justify-center"
                            title="View Status Breakdown"
                        >
                            <BarChart2 className="w-4 h-4 text-teal-600 sm:mr-1" />
                            <span className="hidden sm:inline">Status</span>
                        </button>
                        <button
                            onClick={() => {
                                setInlineCreateStatus(null);
                                setSelectedTicket({
                                    _id: 'new', title: '', description: '', priority: 'Medium', status: 'To Do', issueType: 'Task', storyPoints: 0, labels: [], assignee: null, startDate: '', endDate: '', checklist: [{ text: '', completed: false }]
                                });
                                setModalFilterTeam('');
                                setIsModalOpen(true);
                            }}
                            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg flex items-center text-sm transition-all shadow-sm w-full sm:w-auto justify-center whitespace-nowrap"
                        >
                            <Plus className="w-4 h-4 mr-1" /> Create Task
                        </button>
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
                                        onClick={() => {
                                            setSelectedTicket({
                                                ...ticket,
                                                startDate: ticket.startDate ? new Date(ticket.startDate).toISOString().split('T')[0] : '',
                                                endDate: ticket.endDate ? new Date(ticket.endDate).toISOString().split('T')[0] : ''
                                            });
                                            const assigneeWorker = workers.find(w => w._id === (ticket.assignee?._id || ticket.assignee));
                                            setModalFilterTeam(assigneeWorker?.department || '');
                                            setIsModalOpen(true);
                                        }}
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

                                        <div className="flex justify-between items-start mb-4">
                                            <div className="text-sm font-medium text-gray-800 leading-snug group-hover:text-teal-700 transition-colors">
                                                {ticket.title}
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteTicket(ticket);
                                                }}
                                                className="p-1 hover:bg-red-50 rounded text-red-500 transition-all ml-1"
                                                title="Delete Task"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {ticket.checklist && ticket.checklist.length > 0 && (
                                            <div className="mb-4">
                                                <div className="flex justify-between items-center mb-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                                    <span>Progress</span>
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

                                        <div className="flex flex-wrap gap-2 mb-3 lg:hidden">
                                            {status !== 'To Do' && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        const prevStatus = columns[columns.indexOf(status) - 1];
                                                        updateStatus(ticket._id, prevStatus);
                                                    }}
                                                    className="flex-1 py-1 bg-gray-50 text-gray-500 rounded border border-gray-100 text-[10px] font-bold uppercase tracking-wider"
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
                                                    className="flex-1 py-1 bg-teal-50 text-teal-700 rounded border border-teal-100 text-[10px] font-bold uppercase tracking-wider"
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

                                {/* Inline Create UI */}
                                {inlineCreateStatus === status ? (
                                    <div className="bg-white p-3 rounded-xl shadow-md border border-teal-400 transform transition-all">
                                        <textarea
                                            autoFocus
                                            placeholder="What needs to be done?"
                                            value={inlineTitle}
                                            onChange={(e) => setInlineTitle(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    saveInlineTicket(status);
                                                }
                                            }}
                                            className="w-full text-sm text-gray-800 resize-none focus:outline-none bg-transparent placeholder-gray-400"
                                            rows={2}
                                        />
                                        <div className="flex items-center justify-end space-x-2 mt-2">
                                            <button onClick={() => setInlineCreateStatus(null)} className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
                                                <X className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => saveInlineTicket(status)} className="bg-teal-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-sm hover:bg-teal-700 transition-colors">
                                                Save Task
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setInlineCreateStatus(status)}
                                        className="w-full text-left p-3 rounded-xl text-gray-500 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 hover:text-teal-700 flex items-center text-sm font-medium transition-all group"
                                    >
                                        <Plus className="w-4 h-4 mr-2 text-gray-400 group-hover:text-teal-600 rounded" /> Add new task
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive Detail Modal */}
            {isModalOpen && selectedTicket && (
                <div className="fixed inset-0 bg-black/60 z-[100] flex flex-col items-center justify-end sm:justify-center backdrop-blur-[2px] transition-all duration-300">
                    <div className="bg-white rounded-t-[2.5rem] sm:rounded-2xl shadow-2xl w-full sm:max-w-5xl h-[92vh] sm:h-[85vh] flex flex-col animate-in slide-in-from-bottom duration-300">

                        {/* Header */}
                        <div className="px-6 py-4 flex justify-between items-center text-gray-600 shrink-0 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center space-x-2 text-sm font-semibold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
                                <IssueIcon type={selectedTicket.issueType} />
                                <span className="uppercase text-gray-700">{selectedTicket._id === 'new' ? 'New Task' : selectedTicket.issueType}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                {selectedTicket._id !== 'new' && (
                                    <button onClick={handleDeleteTicket} className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600 transition-colors" title="Delete Task">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                )}
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors bg-gray-100">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col md:flex-row flex-1 overflow-y-auto md:overflow-hidden font-sans custom-scrollbar bg-white">
                            {/* Main Content Area */}
                            <div className="w-full md:w-[65%] md:overflow-y-auto px-4 sm:px-6 py-6 md:border-r border-gray-100 custom-scrollbar">
                                <textarea
                                    autoFocus
                                    value={selectedTicket.title}
                                    onChange={(e) => updateSelectedTicket({ title: e.target.value })}
                                    className="w-full text-xl sm:text-2xl font-bold text-gray-800 border-2 border-transparent hover:border-gray-100 focus:border-teal-500 focus:bg-white rounded-xl p-2 sm:p-3 -ml-0 sm:-ml-3 mb-4 sm:mb-6 resize-none focus:outline-none transition-colors leading-tight"
                                    placeholder="Task Title"
                                    rows={2}
                                />

                                <div className="mb-6">
                                    {selectedTicket._id !== 'new' && selectedTicket.createdAt && (
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 text-[10px] font-bold text-gray-400 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                                            <div className="flex items-center gap-1.5 uppercase tracking-widest whitespace-nowrap">
                                                <Calendar className="w-4 h-4 text-teal-500" />
                                                <span>Created on <span className="text-gray-700 ml-1 font-extrabold">{new Date(selectedTicket.createdAt).toLocaleDateString('en-GB')}</span></span>
                                            </div>
                                            <div className="flex items-center gap-1.5 uppercase tracking-widest sm:pl-4 sm:border-l border-gray-200 whitespace-nowrap">
                                                <Clock className="w-4 h-4 text-teal-500" />
                                                <span>Last edited <span className="text-gray-700 ml-1 font-extrabold">{new Date(selectedTicket.updatedAt).toLocaleDateString('en-GB')} {new Date(selectedTicket.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span></span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-sm font-bold text-gray-700 flex items-center">
                                            <List className="w-4 h-4 mr-2 text-teal-600" /> Task Checklist
                                        </label>
                                    </div>

                                    {selectedTicket._id !== 'new' && selectedTicket.checklist && selectedTicket.checklist.length > 0 && (
                                        <div className="mb-4 bg-white border border-teal-100 rounded-xl p-3 shadow-sm">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Execution Progress</span>
                                                <span className="text-[10px] font-extrabold bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full border border-teal-100">
                                                    {selectedTicket.checklist.filter(i => i.completed).length} / {selectedTicket.checklist.length} POINTS DONE
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-1.5 shadow-inner overflow-hidden">
                                                <div
                                                    className="bg-teal-500 h-1.5 rounded-full transition-all duration-500 shadow-sm"
                                                    style={{ width: `${(selectedTicket.checklist.filter(i => i.completed).length / selectedTicket.checklist.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-1 bg-gray-50/50 border border-gray-200 rounded-xl p-4 min-h-[12rem] shadow-inner mb-6">
                                        {(selectedTicket.checklist && selectedTicket.checklist.length > 0 ? selectedTicket.checklist : [{ text: '', completed: false }]).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group py-1.5 px-2 hover:bg-white rounded-lg transition-all">
                                                <div className="flex items-center h-6">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.completed}
                                                        onChange={() => toggleChecklistItem(idx)}
                                                        className="h-5 w-5 text-teal-600 border-gray-300 rounded cursor-pointer transition-all shadow-sm focus:ring-teal-500"
                                                    />
                                                </div>
                                                <input
                                                    autoFocus={idx > 0 && item.text === ''}
                                                    value={item.text}
                                                    onChange={(e) => updateChecklistItemText(idx, e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            e.preventDefault();
                                                            addChecklistItem(idx);
                                                        } else if (e.key === 'Backspace' && item.text === '' && (selectedTicket.checklist || []).length > 1) {
                                                            e.preventDefault();
                                                            removeChecklistItem(idx);
                                                            // Focus previous input logic could be added here
                                                        }
                                                    }}
                                                    className={`flex-1 bg-transparent border-none focus:ring-0 text-sm font-semibold text-gray-700 placeholder-gray-400 outline-none ${item.completed ? 'text-gray-400 line-through italic' : ''}`}
                                                    placeholder="Describe this step..."
                                                />
                                                <button
                                                    onClick={() => removeChecklistItem(idx)}
                                                    className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-500 transition-all rounded-md hover:bg-red-50"
                                                    title="Remove Item"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => addChecklistItem()}
                                            className="mt-4 flex items-center gap-2 text-teal-600 hover:text-teal-700 text-xs font-extrabold uppercase tracking-wider transition-all px-2 py-2 hover:bg-teal-50 rounded-lg w-fit"
                                        >
                                            <Plus className="w-4 h-4" /> Add Next Point
                                        </button>
                                    </div>


                                </div>

                                {selectedTicket._id === 'new' && (
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={async () => {
                                                setLoading(true);
                                                try {
                                                    const taskToSave = { ...selectedTicket, subdomain };
                                                    if (taskToSave.assignee === 'all' && modalFilterTeam) {
                                                        const teamWorkers = workers.filter(w => w.department === modalFilterTeam);
                                                        const creations = teamWorkers.map(w => {
                                                            const individualTask = { ...taskToSave, assignee: w._id };
                                                            return createTicket(individualTask);
                                                        });
                                                        const newTickets = await Promise.all(creations);
                                                        setTickets([...newTickets, ...tickets]);
                                                    } else {
                                                        if (taskToSave.assignee && typeof taskToSave.assignee === 'object') {
                                                            taskToSave.assignee = taskToSave.assignee._id;
                                                        }
                                                        const newT = await createTicket(taskToSave);
                                                        setTickets([newT, ...tickets]);
                                                    }
                                                    setIsModalOpen(false);
                                                } catch (e) {
                                                    console.error('Save failed', e);
                                                } finally {
                                                    setLoading(false);
                                                }
                                            }}
                                            className="bg-teal-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-teal-700 transition-all shadow-md active:scale-95"
                                            disabled={!selectedTicket.title}
                                        >
                                            Save Task
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar Details Area */}
                            <div className="w-full md:w-[35%] md:overflow-y-auto p-5 sm:p-6 md:p-8 text-sm bg-gray-50/50 border-t md:border-t-0 custom-scrollbar">
                                <div className="space-y-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Status \u0026 Properties</h3>
                                    <div>
                                        <Select value={selectedTicket.status} onValueChange={(val) => updateSelectedTicket({ status: val })}>
                                            <SelectTrigger className="w-full md:w-auto bg-white border-gray-300 text-xs font-bold h-11 px-4 py-2 uppercase shadow-sm">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="z-[200]">
                                                {columns.map(status => (
                                                    <SelectItem key={status} value={status}>{status}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm text-gray-800">
                                        <div className="space-y-5">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Team Name</span>
                                                <Select value={modalFilterTeam} onValueChange={(val) => {
                                                    setModalFilterTeam(val === "all_teams_modal" ? "" : val);
                                                    updateSelectedTicket({ assignee: null });
                                                }}>
                                                    <SelectTrigger className="w-full bg-white border-gray-300 h-11 text-sm shadow-sm">
                                                        <SelectValue placeholder="All Teams" />
                                                    </SelectTrigger>
                                                    <SelectContent className="z-[200]">
                                                        <SelectItem value="all_teams_modal">All Teams (Show all employees)</SelectItem>
                                                        {[...new Set(workers.map(w => w.department).filter(Boolean))].map(team => (
                                                            <SelectItem key={team} value={team}>{team}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Assignee</span>
                                                <Select
                                                    value={selectedTicket.assignee?._id || (typeof selectedTicket.assignee === 'string' ? selectedTicket.assignee : "unassigned_modal")}
                                                    onValueChange={(val) => updateSelectedTicket({ assignee: val === "unassigned_modal" ? null : val })}
                                                >
                                                    <SelectTrigger className="w-full bg-white border-gray-300 h-11 text-sm shadow-sm">
                                                        <SelectValue placeholder="Unassigned" />
                                                    </SelectTrigger>
                                                    <SelectContent className="z-[200]">
                                                        <SelectItem value="unassigned_modal">Unassigned</SelectItem>
                                                        {modalFilterTeam && (
                                                            <SelectItem value="all" className="bg-teal-50 font-bold">ALL TEAM MEMBERS ({workers.filter(w => w.department === modalFilterTeam).length})</SelectItem>
                                                        )}
                                                        {workers
                                                            .filter(w => !modalFilterTeam || w.department === modalFilterTeam)
                                                            .map(w => (
                                                                <SelectItem key={w._id} value={w._id}>{w.name}</SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Issue Type</span>
                                                <Select value={selectedTicket.issueType} onValueChange={(val) => updateSelectedTicket({ issueType: val })}>
                                                    <SelectTrigger className="w-full bg-white border-gray-300 h-11 text-sm flex items-center gap-2 shadow-sm">
                                                        <div className="flex items-center gap-2">
                                                            <IssueIcon type={selectedTicket.issueType} />
                                                            <SelectValue />
                                                        </div>
                                                    </SelectTrigger>
                                                    <SelectContent className="z-[200]">
                                                        <SelectItem value="Task">Task</SelectItem>
                                                        <SelectItem value="Bug">Bug</SelectItem>
                                                        <SelectItem value="Story">Story</SelectItem>
                                                        <SelectItem value="Epic">Epic</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Priority</span>
                                                    <Select value={selectedTicket.priority} onValueChange={(val) => updateSelectedTicket({ priority: val })}>
                                                        <SelectTrigger className="w-full bg-white border-gray-300 h-11 text-xs px-2 shadow-sm">
                                                            <div className="flex items-center gap-2 overflow-hidden">
                                                                <PriorityIcon priority={selectedTicket.priority} />
                                                                <SelectValue />
                                                            </div>
                                                        </SelectTrigger>
                                                        <SelectContent className="z-[200]">
                                                            <SelectItem value="Low">Low</SelectItem>
                                                            <SelectItem value="Medium">Medium</SelectItem>
                                                            <SelectItem value="High">High</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Story Points</span>
                                                    <input
                                                        type="text"
                                                        value={selectedTicket.storyPoints || ''}
                                                        onChange={(e) => updateSelectedTicket({ storyPoints: parseInt(e.target.value) || 0 })}
                                                        placeholder="0"
                                                        className="w-full font-medium bg-gray-50 border border-gray-200 hover:border-teal-100 p-2.5 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all"
                                                        min="0"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Labels</span>
                                                <input
                                                    type="text"
                                                    value={selectedTicket.labels?.join(', ') || ''}
                                                    onChange={(e) => {
                                                        const labels = e.target.value.split(',').map(l => l.trim()).filter(Boolean);
                                                        updateSelectedTicket({ labels });
                                                    }}
                                                    placeholder="frontend, urgent..."
                                                    className="w-full font-medium bg-gray-50 border border-gray-200 hover:border-teal-100 p-2.5 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm placeholder-gray-400 transition-all"
                                                />
                                            </div>

                                            <div className="pt-2 border-t border-gray-100">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider mb-2 block">Scheduling</span>
                                                <div className="space-y-3">
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[11px] text-gray-500 font-semibold">Start Date</label>
                                                        <div className="relative">
                                                            <input
                                                                type="date"
                                                                value={selectedTicket.startDate || ''}
                                                                onChange={(e) => updateSelectedTicket({ startDate: e.target.value })}
                                                                className="w-full font-medium bg-gray-50 border border-gray-200 hover:border-teal-100 p-2.5 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all pr-10"
                                                            />
                                                            <Calendar className="w-4 h-4 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-1.5">
                                                        <label className="text-[11px] text-gray-500 font-semibold">End Date</label>
                                                        <div className="relative">
                                                            <input
                                                                type="date"
                                                                value={selectedTicket.endDate || ''}
                                                                onChange={(e) => updateSelectedTicket({ endDate: e.target.value })}
                                                                className={`w-full font-medium p-2.5 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none text-sm transition-all pr-10 ${isOverdue(selectedTicket.endDate, selectedTicket.status) ? 'bg-red-50 border-red-300 text-red-900' : 'bg-gray-50 border border-gray-200 hover:border-teal-100'}`}
                                                            />
                                                            <Calendar className="w-4 h-4 absolute right-3 top-3 text-gray-400 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dates moved above description */}
                                    {selectedTicket._id !== 'new' && (
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={() => handleDeleteTicket(selectedTicket)}
                                                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-red-200 bg-red-50/50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-all font-bold text-xs uppercase tracking-wider group/del"
                                            >
                                                <Trash2 className="w-4 h-4 group-hover/del:scale-110 transition-transform" /> Delete Task
                                            </button>
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
            {/* Delete Confirmation Modal */}
            {
                deleteConfirm.isOpen && (
                    <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform animate-in zoom-in-95 duration-200">
                            <div className="p-6 text-center">
                                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
                                    <AlertCircle className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Delete this task?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Are you sure you want to delete this specific task? This action is permanent and cannot be undone.
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setDeleteConfirm({ isOpen: false, ticket: null })}
                                        className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold text-sm transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={executeDelete}
                                        className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-sm transition-all shadow-md shadow-red-200 active:scale-95"
                                    >
                                        Delete Task
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Stats Breakdown Modal */}
            <StatsBreakdownModal
                isOpen={isStatsModalOpen}
                onClose={() => setIsStatsModalOpen(false)}
                tickets={tickets}
                workers={workers}
                columns={columns}
            />
        </div >
    );
};

const StatsBreakdownModal = ({ isOpen, onClose, tickets, workers, columns }) => {
    if (!isOpen) return null;

    // Calculate team-wise stats
    const teams = [...new Set(workers.map(w => w.department || 'Unassigned').filter(Boolean))];
    const teamStats = teams.map(team => {
        const teamWorkers = workers.filter(w => (w.department || 'Unassigned') === team).map(w => w._id);
        const teamTickets = tickets.filter(t => t.assignee && teamWorkers.includes(t.assignee._id || t.assignee));

        const stats = {};
        columns.forEach(col => {
            stats[col] = teamTickets.filter(t => t.status === col).length;
        });
        return { team, stats, total: teamTickets.length };
    });

    // Calculate person-wise stats
    const personStats = workers.map(worker => {
        const workerTickets = tickets.filter(t => (t.assignee?._id || t.assignee) === worker._id);
        const stats = {};
        columns.forEach(col => {
            stats[col] = workerTickets.filter(t => t.status === col).length;
        });
        return { name: worker.name, team: worker.department || 'Unassigned', stats, total: workerTickets.length };
    });

    return (
        <div className="fixed inset-0 bg-black/60 z-[250] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col transform animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 flex justify-between items-center text-gray-800 shrink-0 border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center space-x-2">
                        <BarChart2 className="w-5 h-5 text-teal-600" />
                        <h2 className="text-lg font-bold">Allocation Status Overview</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors bg-gray-100">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10 custom-scrollbar bg-white">
                    {/* Team Summary Section */}
                    <section>
                        <div className="flex items-center gap-2 mb-4 border-l-4 border-teal-500 pl-3">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Team-wise Performance</h3>
                        </div>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50/80">
                                    <tr>
                                        <th className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100">Department / Team</th>
                                        {columns.map(col => (
                                            <th key={col} className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest text-center border-b border-gray-100">{col}</th>
                                        ))}
                                        <th className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest text-center border-b border-gray-100 bg-teal-50/50 text-teal-600">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {teamStats.map(ts => (
                                        <tr key={ts.team} className="hover:bg-teal-50/30 transition-colors group">
                                            <td className="py-4 px-4">
                                                <div className="text-sm font-bold text-gray-700 group-hover:text-teal-700 transition-colors">{ts.team}</div>
                                            </td>
                                            {columns.map(col => (
                                                <td key={col} className="py-4 px-4 text-center">
                                                    <span className={`inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-lg text-xs font-bold ${ts.stats[col] > 0 ? (col === 'Done' ? 'bg-green-100 text-green-700' : 'bg-teal-50 text-teal-700') : 'bg-gray-50 text-gray-300'}`}>
                                                        {ts.stats[col]}
                                                    </span>
                                                </td>
                                            ))}
                                            <td className="py-4 px-4 text-center bg-teal-50/20">
                                                <span className="text-sm font-extrabold text-gray-900">
                                                    {ts.total}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {teamStats.length === 0 && (
                                        <tr>
                                            <td colSpan={columns.length + 2} className="py-10 text-center text-gray-400 text-sm italic">No team data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Individual Summary Section */}
                    <section>
                        <div className="flex items-center gap-2 mb-4 border-l-4 border-blue-500 pl-3">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Employee Task Breakdown</h3>
                        </div>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50/80">
                                    <tr>
                                        <th className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100">Employee Name</th>
                                        <th className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest border-b border-gray-100">Team</th>
                                        {columns.map(col => (
                                            <th key={col} className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest text-center border-b border-gray-100">{col}</th>
                                        ))}
                                        <th className="py-3.5 px-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest text-center border-b border-gray-100 bg-blue-50/50 text-blue-600">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {personStats.map(ps => (
                                        <tr key={ps.name} className="hover:bg-blue-50/30 transition-colors group">
                                            <td className="py-4 px-4">
                                                <div className="text-sm font-bold text-gray-700 group-hover:text-blue-700 transition-colors">{ps.name}</div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-gray-100 text-gray-500 uppercase tracking-tight">
                                                    {ps.team}
                                                </span>
                                            </td>
                                            {columns.map(col => (
                                                <td key={col} className="py-4 px-4 text-center">
                                                    <span className={`inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-lg text-xs font-bold ${ps.stats[col] > 0 ? (col === 'Done' ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-700') : 'bg-gray-50 text-gray-300'}`}>
                                                        {ps.stats[col]}
                                                    </span>
                                                </td>
                                            ))}
                                            <td className="py-4 px-4 text-center bg-blue-50/20">
                                                <span className="text-sm font-extrabold text-gray-900">
                                                    {ps.total}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {personStats.length === 0 && (
                                        <tr>
                                            <td colSpan={columns.length + 3} className="py-10 text-center text-gray-400 text-sm italic">No employee data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold rounded-xl transition-all shadow-md active:scale-95"
                    >
                        Close Overview
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkAllocation;
