import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Card from '../common/Card';
import AdvancedInvoice from './AdvancedInvoice';
import InvoiceHistory from './InvoiceHistory';
import UnifiedInvoiceHistory from './UnifiedInvoiceHistory';
import AdminDeleteHistory from './AdminDeleteHistory'; // Add this import
import RenewalModal from './RenewalModal';
import { getInvoices, getAllInvoices, createInvoice, updateInvoice, deleteInvoice, updateAdminLastViewed } from '../../services/invoiceService';
import { useAuth } from '../../hooks/useAuth';

const InvoiceManagement = () => {
  const [activeTab, setActiveTab] = useState('advanced-invoice');
  const [invoices, setInvoices] = useState([]);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Filter states
  const [filterType, setFilterType] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Renewal Modal State
  const [isRenewalModalOpen, setIsRenewalModalOpen] = useState(false);
  const [renewalInvoiceData, setRenewalInvoiceData] = useState(null);

  // Load invoices from backend on component mount
  useEffect(() => {
    fetchInvoices();

    // Update admin last viewed timestamp to reset notification count
    updateAdminLastViewed();
  }, []);

  const fetchInvoices = async (type = filterType, start = startDate, end = endDate) => {
    try {
      setLoading(true);
      setError(null);
      
      const params = { filterType: type };
      if (type === 'custom' && start && end) {
        params.startDate = start;
        params.endDate = end;
      }
      
      const response = await getAllInvoices(params);
      if (response.success) {
        setInvoices(response.data);
      } else {
        setError(response.message || 'Failed to fetch invoices');
      }
    } catch (err) {
      setError('Error fetching invoices: ' + (err.message || 'Unknown error'));
      console.error('Error fetching invoices:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    if (type !== 'custom') {
      fetchInvoices(type);
    }
  };

  const applyCustomFilter = () => {
    if (!startDate || !endDate) {
      toast.warn('Please select both start and end dates');
      return;
    }
    fetchInvoices('custom', startDate, endDate);
  };

  const handleInvoiceSave = async (invoiceData) => {
    try {
      let response;

      // Check if invoice already exists (by invoiceNo)
      const existingInvoice = invoices.find(inv => inv.invoiceNo === invoiceData.invoiceNo);

      if (existingInvoice) {
        // Update existing invoice
        response = await updateInvoice(existingInvoice._id, invoiceData);
      } else {
        // Create new invoice
        response = await createInvoice(invoiceData);
      }

      if (response.success) {
        // Refresh invoices list
        await fetchInvoices();
        toast.success('Invoice saved successfully!');

        // Automatically trigger renewal modal after save
        setRenewalInvoiceData({
            id: response.data.invoiceNo,
            mongoId: response.data._id,
            customerName: invoiceData.customerName,
            customerContact: invoiceData.customerContact
        });
        setIsRenewalModalOpen(true);
      } else {
        toast.error('Failed to save invoice: ' + response.message);
      }
    } catch (err) {
      console.error('Error saving invoice:', err);
      toast.error('Error saving invoice: ' + (err.message || 'Unknown error'));
    }
  };

  const handleEditInvoice = (invoice) => {
    setEditingInvoice(invoice);
    setActiveTab('advanced-invoice');
  };

  // Handle delete invoice callback
  const handleDeleteInvoice = async (invoiceId) => {
    // Refresh invoices list after deletion
    await fetchInvoices();
    toast.success('Invoice deleted successfully!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <h1 className="text-2xl font-bold text-gray-800">Invoice Management</h1>
        <div className="flex items-center gap-3">
            <button
            onClick={() => {
                setEditingInvoice(null);
                setActiveTab('advanced-invoice');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-sm transition-all duration-200 flex items-center gap-2"
            >
            <span className="text-lg">+</span> Create New Invoice
            </button>
        </div>
      </div>

      {/* Global Filter UI - Only show for history tabs */}
      {(activeTab === 'invoice-history' || activeTab === 'unified-history') && (
        <div className="flex flex-wrap items-center justify-end gap-3 animate-in fade-in slide-in-from-top-4">
          <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
            {[
              { id: 'today', label: 'Today' },
              { id: 'weekly', label: 'Weekly' },
              { id: 'monthly', label: 'Monthly' },
              { id: 'all', label: 'All' },
              { id: 'custom', label: 'Custom' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => handleFilterChange(option.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filterType === option.id 
                    ? 'bg-blue-50 text-blue-600 shadow-inner' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {filterType === 'custom' && (
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm animate-in zoom-in-95">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-transparent border-none text-sm focus:ring-0 px-2 py-1 cursor-pointer"
              />
              <span className="text-gray-400 text-xs">to</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-transparent border-none text-sm focus:ring-0 px-2 py-1 cursor-pointer"
              />
              <button
                onClick={applyCustomFilter}
                className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Apply
              </button>
            </div>
          )}
        </div>
      )}

      {/* Error indicator */}
      {error && !loading && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500 font-medium">Fetching your invoices...</p>
        </div>
      )}

      {/* Tabs for different invoice types */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('advanced-invoice')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'advanced-invoice'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Advanced Invoice
          </button>
          <button
            onClick={() => setActiveTab('invoice-history')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'invoice-history'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Invoice History
          </button>
          <button
            onClick={() => setActiveTab('unified-history')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'unified-history'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            All Invoices
          </button>
          <button
            onClick={() => setActiveTab('delete-history')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'delete-history'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Delete History
          </button>
        </nav>
      </div>

      {/* Content based on active tab */}
      <div className="mt-6">
        {activeTab === 'advanced-invoice' && (
          <AdvancedInvoice
            onInvoiceSave={handleInvoiceSave}
            initialData={editingInvoice}
          />
        )}
        {activeTab === 'invoice-history' && !loading && (
          <InvoiceHistory
            invoices={invoices}
            onEditInvoice={handleEditInvoice}
            onDeleteInvoice={handleDeleteInvoice} // Pass the callback
          />
        )}
        {activeTab === 'unified-history' && !loading && (
          <UnifiedInvoiceHistory
            invoices={invoices}
            onEditInvoice={handleEditInvoice}
            onDeleteInvoice={handleDeleteInvoice}
          />
        )}
        {activeTab === 'delete-history' && (
          <AdminDeleteHistory />
        )}
      </div>

      {renewalInvoiceData && (
        <RenewalModal
          isOpen={isRenewalModalOpen}
          onClose={() => setIsRenewalModalOpen(false)}
          invoiceId={renewalInvoiceData.mongoId}
          displayInvoiceNo={renewalInvoiceData.id}
          clientName={renewalInvoiceData.customerName}
          clientWhatsappInitial={(() => {
            const contact = renewalInvoiceData.customerContact || '';
            const match = contact.match(/\d{10}/);
            return match ? match[0] : '';
          })()}
        />
      )}
    </div>
  );
};

export default InvoiceManagement;