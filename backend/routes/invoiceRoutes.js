const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const { protect, adminOnly, adminOrWorker } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// Routes for creating and getting invoices (allow both admin and worker)
router.route('/')
  .post(adminOrWorker, invoiceController.createInvoice)
  .get(adminOrWorker, invoiceController.getInvoicesByAdminOrWorker);

// Super admin route to get all invoices
router.route('/all')
  .get(adminOnly, invoiceController.getAllInvoices);

// Route to update admin last viewed timestamp
router.route('/admin-viewed')
  .put(adminOnly, invoiceController.updateAdminLastViewed);

// Route to get new invoice count
router.route('/new-count')
  .get(adminOnly, invoiceController.getNewInvoiceCount);

// Individual invoice routes (allow both admin and worker for their own invoices)
router.route('/:id')
  .get(adminOrWorker, invoiceController.getInvoiceById)
  .put(adminOrWorker, invoiceController.updateInvoice)
  .delete(adminOrWorker, invoiceController.deleteInvoice);

module.exports = router;