import React, { useState, useEffect, useContext } from 'react';
import appContext from '../../context/AppContext';
import { getTickets, createTicket, updateTicket, deleteTicket } from '../../services/ticketService';
import { getWorkers } from '../../services/workerService';
import Spinner from '../common/Spinner';
import {
    Search, Plus, Trash2, CheckSquare,
    AlertCircle, Bookmark, Zap, ArrowUp, ArrowDown,
    Minus, X, User, AlignLeft, LayoutDashboard, Flag, List, ListOrdered,
    Calendar, Clock
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

const getTicketKey = (id) => id ? `CG-${id.substring(id.length - 4).toUpperCase()}` : '';

const WorkAllocation = () => {
    const [tickets, setTickets] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterAssignee, setFilterAssignee] = useState('');
    const [filterTeam, setFilterTeam] = useState('');
    const [filterPriority, setFilterPriority] = useState('');
    const { subdomain } = useContext(appContext);

    // Modal state
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Inline creation state
    const [inlineCreateStatus, setInlineCreateStatus] = useState(null);
    const [inlineTitle, setInlineTitle] = useState('');

    // DND Visuals
    const [dragOverCol, setDragOverCol] = useState(null);

    // Delete Confirmation State
    const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, ticket: null });

    const columns = ['To Do', 'In Progress', 'Review', 'Done'];

    useEffect(() => { fetchData(); }, [subdomain]);

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

    const handleDrop = async (e, targetStatus) => {
        e.preventDefault();
        setDragOverCol(null);
        const ticketId = e.dataTransfer.getData('ticketId');
        if (!ticketId) return;

        const ticket = tickets.find(t => t._id === ticketId);
        if (ticket && ticket.status !== targetStatus) {
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
        }
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

    const updateSelectedTicket = async (updates) => {
        const updatedTicket = { ...selectedTicket, ...updates };
        setSelectedTicket(updatedTicket);
        setTickets(tickets.map(t => t._id === updatedTicket._id ? updatedTicket : t));

        // Only call update API if it's an existing ticket
        if (updatedTicket._id !== 'new') {
            try {
                await updateTicket(updatedTicket._id, { ...updates, subdomain });
            } catch (error) {
                console.error('Update failed', error);
                fetchData();
            }
        }
    };

    const handleDescriptionToolbar = (type) => {
        const textarea = document.getElementById('ticket-description');
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = selectedTicket.description || '';

        if (!value) {
            updateSelectedTicket({ description: type === 'bullet' ? '• ' : '1. ' });
            setTimeout(() => textarea.focus(), 0);
            return;
        }

        let charCount = 0;
        let listIndex = 1;
        const updatedLines = value.split('\n').map((line) => {
            const lineStart = charCount;
            const lineEnd = charCount + line.length;
            charCount += line.length + 1;

            const isSelected = (start >= lineStart && start <= lineEnd) ||
                (end > lineStart && end <= lineEnd) ||
                (lineStart >= start && lineEnd <= end);

            if (isSelected) {
                if (type === 'bullet') {
                    const bulletMatch = line.match(/^[•\-\*]\s*/);
                    if (bulletMatch) return line.substring(bulletMatch[0].length);
                    return `• ${line}`;
                } else {
                    const numMatch = line.match(/^\d+\.\s*/);
                    if (numMatch) return line.substring(numMatch[0].length);
                    return `${listIndex++}. ${line}`;
                }
            }
            return line;
        });

        updateSelectedTicket({ description: updatedLines.join('\n') });
        setTimeout(() => textarea.focus(), 0);
    };

    const handleDescriptionKeyDown = (e) => {
        if (e.key === 'Enter') {
            const textarea = e.target;
            const caretPos = textarea.selectionStart;
            const value = textarea.value;

            const lineStart = value.lastIndexOf('\n', caretPos - 1) + 1;
            const currentLine = value.substring(lineStart, caretPos);

            const bulletMatch = currentLine.match(/^([•\-\*]\s*)/);
            const numberMatch = currentLine.match(/^(\d+)\.\s*/);

            if (bulletMatch || numberMatch) {
                e.preventDefault();

                const isOnlyPrefix = currentLine.trim() === '•' ||
                    currentLine.trim() === '-' ||
                    currentLine.trim() === '*' ||
                    (numberMatch && currentLine.trim() === `${numberMatch[1]}.`);

                if (isOnlyPrefix) {
                    const newValue = value.substring(0, lineStart) + value.substring(caretPos);
                    updateSelectedTicket({ description: newValue });
                    setTimeout(() => textarea.setSelectionRange(lineStart, lineStart), 0);
                } else {
                    let prefix = bulletMatch ? bulletMatch[1] : `${parseInt(numberMatch[1]) + 1}. `;
                    if (bulletMatch && !prefix.includes(' ')) prefix += ' ';

                    const newValue = value.substring(0, caretPos) + '\n' + prefix + value.substring(caretPos);
                    updateSelectedTicket({ description: newValue });
                    setTimeout(() => {
                        const newPos = caretPos + prefix.length + 1;
                        textarea.setSelectionRange(newPos, newPos);
                    }, 0);
                }
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

                        <div className="relative w-full sm:w-auto">
                            <select
                                value={filterAssignee}
                                onChange={(e) => setFilterAssignee(e.target.value)}
                                className="w-full sm:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500 p-2 pr-8 appearance-none outline-none cursor-pointer"
                                style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1em' }}
                            >
                                <option value="">All Employees</option>
                                <option value="unassigned">Unassigned Tasks</option>
                                {workers.map(w => (
                                    <option key={w._id} value={w._id}>{w.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="relative w-full sm:w-auto">
                            <select
                                value={filterTeam}
                                onChange={(e) => setFilterTeam(e.target.value)}
                                className="w-full sm:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500 p-2 pr-8 appearance-none outline-none cursor-pointer"
                                style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1em' }}
                            >
                                <option value="">All Teams</option>
                                {[...new Set(workers.map(w => w.department).filter(Boolean))].map(team => (
                                    <option key={team} value={team}>{team}</option>
                                ))}
                            </select>
                        </div>

                        <div className="relative w-full sm:w-auto">
                            <select
                                value={filterPriority}
                                onChange={(e) => setFilterPriority(e.target.value)}
                                className="w-full sm:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-1 focus:ring-teal-500 focus:border-teal-500 p-2 pr-8 appearance-none outline-none cursor-pointer"
                                style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1em' }}
                            >
                                <option value="">All Priorities</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
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

                    <button
                        onClick={() => {
                            setInlineCreateStatus(null);
                            setSelectedTicket({
                                _id: 'new', title: '', description: '', priority: 'Medium', status: 'To Do', issueType: 'Task', storyPoints: 0, labels: [], assignee: null
                            });
                            setIsModalOpen(true);
                        }}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg flex items-center text-sm transition-all shadow-sm w-full sm:w-auto justify-center"
                    >
                        <Plus className="w-4 h-4 mr-1" /> Create Task
                    </button>
                </div>
            </div>

            {/* Kanban Board Area */}
            <div className="flex-1 overflow-x-auto px-4 md:px-6 py-2 bg-white pb-6 scroll-smooth">
                <div className="flex gap-4 md:gap-6 h-full min-h-[60vh] pb-4 w-max lg:w-full">
                    {columns.map(status => (
                        <div
                            key={status}
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
                                        onClick={() => { setSelectedTicket(ticket); setIsModalOpen(true); }}
                                        className={`bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-teal-100 active:cursor-grabbing transition-all group active:scale-[0.98] ${ticket.issueType === 'Bug' ? 'border-l-4 border-l-red-500' : ticket.issueType === 'Story' ? 'border-l-4 border-l-teal-500' : ticket.issueType === 'Epic' ? 'border-l-4 border-l-purple-500' : 'border-l-4 border-l-blue-500'}`}
                                    >
                                        <div className="flex gap-2 mb-1 flex-wrap">
                                            {ticket.labels && ticket.labels.map(lbl => (
                                                <span key={lbl} className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">{lbl}</span>
                                            ))}
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
                    <div className="bg-white rounded-t-[2.5rem] sm:rounded-2xl shadow-2xl w-full sm:max-w-5xl h-[92vh] sm:h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">

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
                                            <AlignLeft className="w-4 h-4 mr-2 text-gray-400" /> Description
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDescriptionToolbar('bullet')}
                                                    className="p-1.5 hover:bg-white hover:shadow-sm text-gray-500 hover:text-teal-600 rounded-md transition-all"
                                                    title="Add Bullet Point"
                                                >
                                                    <List className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDescriptionToolbar('number')}
                                                    className="p-1.5 hover:bg-white hover:shadow-sm text-gray-500 hover:text-teal-600 rounded-md transition-all"
                                                    title="Add Numbered List"
                                                >
                                                    <ListOrdered className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const currentDesc = selectedTicket.description || '';
                                                    const newLine = currentDesc ? (currentDesc.endsWith('\n') ? '• ' : '\n• ') : '• ';
                                                    updateSelectedTicket({ description: currentDesc + newLine });
                                                    setTimeout(() => {
                                                        const ta = document.getElementById('ticket-description');
                                                        ta.focus();
                                                        ta.setSelectionRange(ta.value.length, ta.value.length);
                                                    }, 0);
                                                }}
                                                className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-teal-600 text-white hover:bg-teal-700 rounded-lg transition-all text-xs font-bold shadow-sm"
                                            >
                                                <Plus className="w-3.5 h-3.5" /> Add Point
                                            </button>
                                        </div>
                                    </div>
                                    <textarea
                                        id="ticket-description"
                                        value={selectedTicket.description || ''}
                                        onKeyDown={handleDescriptionKeyDown}
                                        onChange={(e) => updateSelectedTicket({ description: e.target.value })}
                                        className="w-full h-48 md:h-64 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 hover:bg-gray-50 focus:bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all resize-none placeholder-gray-400"
                                        placeholder="Add more details to this task... (Use bullets or numbered lists)"
                                    />
                                </div>

                                {selectedTicket._id === 'new' && (
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            onClick={async () => {
                                                const newT = await createTicket({ ...selectedTicket, subdomain });
                                                setTickets([newT, ...tickets]);
                                                setIsModalOpen(false);
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
                                        <select
                                            value={selectedTicket.status}
                                            onChange={(e) => updateSelectedTicket({ status: e.target.value })}
                                            className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl p-3 pr-10 focus:ring-2 focus:ring-teal-500 shadow-sm appearance-none uppercase transition-all cursor-pointer outline-none hover:border-teal-200"
                                            style={{ backgroundImage: `url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234B5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.2em' }}
                                        >
                                            {columns.map(status => (
                                                <option key={status} value={status}>{status}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm text-gray-800">
                                        <div className="space-y-5">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Assignee</span>
                                                <select
                                                    value={selectedTicket.assignee?._id || selectedTicket.assignee || ''}
                                                    onChange={(e) => updateSelectedTicket({ assignee: e.target.value || null })}
                                                    className="w-full font-medium bg-gray-50 border border-gray-200 hover:border-teal-100 p-2.5 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none cursor-pointer text-sm transition-all"
                                                >
                                                    <option value="">Unassigned</option>
                                                    {workers.map(w => (
                                                        <option key={w._id} value={w._id}>{w.name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Issue Type</span>
                                                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 hover:border-teal-100 focus-within:ring-2 focus-within:ring-teal-500 transition-all">
                                                    <IssueIcon type={selectedTicket.issueType} />
                                                    <select
                                                        value={selectedTicket.issueType}
                                                        onChange={(e) => updateSelectedTicket({ issueType: e.target.value })}
                                                        className="w-full bg-transparent font-medium border-none outline-none cursor-pointer text-sm"
                                                    >
                                                        <option value="Task">Task</option>
                                                        <option value="Bug">Bug</option>
                                                        <option value="Story">Story</option>
                                                        <option value="Epic">Epic</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">Priority</span>
                                                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-2.5 hover:border-teal-100 focus-within:ring-2 focus-within:ring-teal-500 transition-all">
                                                        <PriorityIcon priority={selectedTicket.priority} />
                                                        <select
                                                            value={selectedTicket.priority}
                                                            onChange={(e) => updateSelectedTicket({ priority: e.target.value })}
                                                            className="w-full bg-transparent font-medium border-none outline-none cursor-pointer text-xs"
                                                        >
                                                            <option value="Low">Low</option>
                                                            <option value="Medium">Medium</option>
                                                            <option value="High">High</option>
                                                        </select>
                                                    </div>
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
                                        </div>
                                    </div>
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

                                    {/* Dates moved above description */}
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
            {deleteConfirm.isOpen && (
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
            )}
        </div>
    );
};

export default WorkAllocation;
