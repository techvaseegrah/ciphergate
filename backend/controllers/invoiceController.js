const Invoice = require('../models/Invoice');
const Admin = require('../models/Admin');
const Worker = require('../models/Worker');
const mongoose = require('mongoose');

// Create a new invoice
const createInvoice = async (req, res) => {
  try {
    const {
      invoiceNo,
      invoiceDate,
      customerName,
      customerContact,
      salesPerson,
      terms,
      dueDate,
      items,
      bankName,
      accountNumber,
      ifscCode,
      upiId,
      gstEnabled,
      saleType,
      customerGst,
      invoiceType,
      workerInfo,
      source
    } = req.body;

    // Validate required fields
    if (!invoiceNo || !invoiceDate || !items || !items.length) {
      return res.status(400).json({ 
        success: false, 
        message: 'Required fields are missing' 
      });
    }

    // Check if invoice already exists
    const existingInvoice = await Invoice.findOne({ invoiceNo });
    if (existingInvoice) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invoice with this number already exists' 
      });
    }

    // Determine the creator model based on user role
    const createdByModel = req.user.role === 'admin' ? 'Admin' : 'Worker';
    
    // Create new invoice
    const invoice = new Invoice({
      invoiceNo,
      invoiceDate,
      customerName: customerName || '',
      customerContact: customerContact || '',
      salesPerson: salesPerson || '',
      terms: terms || '',
      dueDate: dueDate || '',
      items,
      bankName: bankName || '',
      accountNumber: accountNumber || '',
      ifscCode: ifscCode || '',
      upiId: upiId || '',
      gstEnabled: gstEnabled || false,
      saleType: saleType || 'Intrastate',
      customerGst: customerGst || '',
      invoiceType: invoiceType || 'INVOICE',
      createdBy: req.user._id,
      createdByModel,
      workerInfo: workerInfo || {},
      source: source || (req.user.role === 'admin' ? 'admin' : 'worker')
    });

    const savedInvoice = await invoice.save();
    
    res.status(201).json({
      success: true,
      message: 'Invoice created successfully',
      data: savedInvoice
    });
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error creating invoice',
      error: error.message 
    });
  }
};

// Update an existing invoice
const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Remove fields that shouldn't be updated
    delete updateData._id;
    delete updateData.__v;
    delete updateData.createdBy;
    delete updateData.createdByModel;

    // Add updatedAt timestamp
    updateData.updatedAt = new Date();

    const invoice = await Invoice.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: 'Invoice not found'
      });
    }

    // Check if user has permission to update this invoice
    if (invoice.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Invoice updated successfully',
      data: invoice
    });
  } catch (error) {
    console.error('Error updating invoice:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating invoice',
      error: error.message
    });
  }
};

// Get all invoices for an admin or worker
const getInvoicesByAdminOrWorker = async (req, res) => {
  try {
    // Workers can only see their own invoices, admins can see all
    const query = req.user.role === 'worker' 
      ? { createdBy: req.user._id } 
      : {};

    const invoices = await Invoice.find(query)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Invoices retrieved successfully',
      data: invoices
    });
  } catch (error) {
    console.error('Error retrieving invoices:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving invoices',
      error: error.message
    });
  }
};

// Get all invoices for an admin (maintained for backward compatibility)
const getInvoicesByAdmin = async (req, res) => {
  try {
    const invoices = await Invoice.find({ createdBy: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Invoices retrieved successfully',
      data: invoices
    });
  } catch (error) {
    console.error('Error retrieving invoices:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving invoices',
      error: error.message
    });
  }
};

// Get all invoices (admin only)
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find()
      .populate([
        {
          path: 'createdBy',
          select: 'name email',
          model: 'Admin'
        },
        {
          path: 'createdBy',
          select: 'name department',
          model: 'Worker',
          populate: {
            path: 'department',
            select: 'name',
            model: 'Department'
          }
        }
      ])
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'All invoices retrieved successfully',
      data: invoices
    });
  } catch (error) {
    console.error('Error retrieving all invoices:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving all invoices',
      error: error.message
    });
  }
};

// Get a single invoice by ID
const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid invoice ID'
      });
    }

    const invoice = await Invoice.findById(id)
      .populate([
        {
          path: 'createdBy',
          select: 'name email',
          model: 'Admin'
        },
        {
          path: 'createdBy',
          select: 'name department',
          model: 'Worker',
          populate: {
            path: 'department',
            select: 'name',
            model: 'Department'
          }
        }
      ]);

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: 'Invoice not found'
      });
    }

    // Check if user has permission to access this invoice
    if (invoice.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Invoice retrieved successfully',
      data: invoice
    });
  } catch (error) {
    console.error('Error retrieving invoice:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving invoice',
      error: error.message
    });
  }
};

// Delete an invoice
const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid invoice ID'
      });
    }

    const invoice = await Invoice.findById(id);

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message: 'Invoice not found'
      });
    }

    // Check if user has permission to delete this invoice
    if (invoice.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    await Invoice.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Invoice deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting invoice:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting invoice',
      error: error.message
    });
  }
};

module.exports = {
  createInvoice,
  updateInvoice,
  getInvoicesByAdminOrWorker,
  getInvoicesByAdmin,
  getAllInvoices,
  getInvoiceById,
  deleteInvoice
};