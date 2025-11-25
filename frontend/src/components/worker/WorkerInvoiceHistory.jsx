import React from 'react';
import Card from '../common/Card';
import { deleteInvoice } from '../../services/invoiceService';

const WorkerInvoiceHistory = ({ invoices, onEditInvoice, onDeleteInvoice }) => {
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

  // Handle delete invoice
  const handleDeleteInvoice = async (invoiceId) => {
    try {
      const response = await deleteInvoice(invoiceId);
      if (response.success) {
        // Call the onDeleteInvoice callback if provided
        if (onDeleteInvoice) {
          onDeleteInvoice(invoiceId);
        }
      } else {
        alert('Failed to delete invoice: ' + response.message);
      }
    } catch (error) {
      console.error('Error deleting invoice:', error);
      alert('Error deleting invoice: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white font-sans">
      <h1 className="text-xl font-bold text-gray-800 mb-6">Invoice History</h1>
      
      {invoices.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">No invoices found. Create your first invoice to get started.</p>
        </Card>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Invoice No</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Customer</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700 border-b">Amount</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={invoice._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">{invoice.invoiceNo}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">{invoice.invoiceDate || formatDate(invoice.createdAt)}</td>
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">
                    {invoice.customerName || 'N/A'}
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
                        onClick={() => onEditInvoice(invoice)}
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WorkerInvoiceHistory;