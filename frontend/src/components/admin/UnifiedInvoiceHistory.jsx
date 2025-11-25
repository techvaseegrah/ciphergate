import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import { getAllInvoices } from '../../services/invoiceService';

const UnifiedInvoiceHistory = ({ onEditInvoice, onDeleteInvoice }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load unified invoice history from backend
  useEffect(() => {
    fetchAllInvoices();
  }, []);

  const fetchAllInvoices = async () => {
    try {
      setLoading(true);
      const response = await getAllInvoices();
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

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Calculate total amount for an invoice
  const calculateTotal = (invoice) => {
    const subtotal = invoice.items.reduce((sum, item) => 
      sum + (item.isTotalOverridden ? item.total : (item.qty * item.rate)), 0);
    
    const gstTotal = (invoice.gstEnabled) ? 
      invoice.items.reduce((sum, item) => 
        sum + (item.isTotalOverridden ? (item.total * item.gst / 100) : (item.qty * item.rate * item.gst / 100)), 0) : 0;
    
    return subtotal + gstTotal;
  };

  // Get creator information (admin or worker)
  const getCreatorInfo = (invoice) => {
    // For worker-created invoices, use workerInfo if available
    if (invoice.source === 'worker' && invoice.workerInfo) {
      return {
        name: invoice.workerInfo.workerName || 'Unknown Worker',
        department: invoice.workerInfo.workerDepartment || 'Unknown Department'
      };
    }
    
    // For admin-created invoices or when workerInfo is not available
    if (invoice.createdBy) {
      if (typeof invoice.createdBy === 'object') {
        // Populated data
        return {
          name: invoice.createdBy.name || 'Unknown User',
          department: invoice.createdBy.department?.name || 'N/A'
        };
      } else {
        // Just ID
        return {
          name: 'Unknown User',
          department: 'N/A'
        };
      }
    }
    
    return {
      name: 'Unknown User',
      department: 'N/A'
    };
  };

  // Handle delete invoice from unified history
  const handleDeleteInvoice = async (invoiceId) => {
    try {
      // Call the onDeleteInvoice callback if provided
      if (onDeleteInvoice) {
        await onDeleteInvoice(invoiceId);
        // Refresh the list after deletion
        await fetchAllInvoices();
      }
    } catch (error) {
      console.error('Error deleting invoice:', error);
      alert('Error deleting invoice: ' + (error.message || 'Unknown error'));
    }
  };

  // Handle edit invoice
  const handleEditInvoice = (invoice) => {
    if (onEditInvoice) {
      onEditInvoice(invoice);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white font-sans">
      <h1 className="text-xl font-bold text-gray-800 mb-6">Unified Invoice History</h1>
      
      {/* Loading indicator */}
      {loading && (
        <div className="text-center py-4">
          <p>Loading invoices...</p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {!loading && !error && invoices.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">No invoices found. Invoices created by both admins and workers will appear here.</p>
        </Card>
      ) : !loading && !error ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Invoice No</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Customer</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Creator</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Department</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Amount</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => {
                const creatorInfo = getCreatorInfo(invoice);
                return (
                  <tr key={invoice._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">{invoice.invoiceNo}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">{invoice.invoiceDate || formatDate(invoice.createdAt)}</td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">
                      {invoice.customerName || 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">
                      {creatorInfo.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">
                      {creatorInfo.department}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                        {invoice.invoiceType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b text-right">
                      ₹{calculateTotal(invoice).toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700 border-b text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleEditInvoice(invoice)}
                          className="text-blue-600 hover:text-blue-900 font-medium text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteInvoice(invoice._id)}
                          className="text-red-600 hover:text-red-900 font-medium text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default UnifiedInvoiceHistory;