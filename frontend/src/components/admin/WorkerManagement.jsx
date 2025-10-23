import React, { useState, useEffect, useContext,useRef } from 'react';
import { toast } from 'react-toastify';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { getWorkers, createWorker, updateWorker, deleteWorker, getUniqueId } from '../../services/workerService';
import { getDepartments } from '../../services/departmentService';
import { getSettings } from '../../services/settingsService';
import Card from '../common/Card';
import Button from '../common/Button';
import Table from '../common/Table';
import Modal from '../common/Modal';
import Spinner from '../common/Spinner';
import appContext from '../../context/AppContext';
import QRCode from 'qrcode';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const WorkerManagement = () => {
  const nameInputRef = useRef(null);
  const [workers, setWorkers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [batches, setBatches] = useState([]); // <-- This line was missing
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingDepartments, setIsLoadingDepartments] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [showEditConfirmPassword, setShowEditConfirmPassword] = useState(false);
  
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, photo: file }));
  };

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    rfid: '',
    salary: 0,
    batch: '' ,
    password: '',
    confirmPassword: '',
    department: '',
    photo: ''
  });

  // Subdomain
  const { subdomain } = useContext(appContext);

  // Load workers and departments
  const loadData = async () => {
    setIsLoading(true);
    setIsLoadingDepartments(true);

    try {
        const [workersData, departmentsData, settingsData] = await Promise.all([
            getWorkers({ subdomain }),
            getDepartments({ subdomain }),
            getSettings({ subdomain })
        ]);

        const safeWorkersData = Array.isArray(workersData) ? workersData : [];
        const safeDepartmentsData = Array.isArray(departmentsData) ? departmentsData : [];
        const safeSettingsData = settingsData || {};

        setWorkers(safeWorkersData);
        setDepartments(safeDepartmentsData);
        setBatches(safeSettingsData.batches || []);
    } catch (error) {
        toast.error('Failed to load data');
        console.error(error);
        setWorkers([]);
        setDepartments([]);
        setBatches([]);
    } finally {
        setIsLoading(false);
        setIsLoadingDepartments(false);
    }
};

useEffect(() => {
    loadData();
}, []);

  const getWorkerId = async () => {
    await getUniqueId()
      .then((response) => {
        setFormData(prev => ({ ...prev, rfid: response.rfid }));
      })
      .catch((e) => console.log(e.message));
  }

  useEffect(() => {
    getWorkerId();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Filter workers
  const filteredWorkers = Array.isArray(workers)
    ? workers.filter(
      worker =>
        worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (worker.department && worker.department.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (worker.rfid && worker.rfid.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    : [];

    useEffect(() => {
          if (isAddModalOpen) {
            nameInputRef.current?.focus();
          }
        }, [isAddModalOpen]);

  // Open add worker modal
const openAddModal = () => {
    setFormData(prev => ({
      ...prev,
      name: '',
      username: '',
      password: '',
      department: departments.length > 0 ? departments[0]._id : '', // Ensure first department is selected
      photo: '',
      batch: batches.length > 0 ? batches[0].batchName : '' // ADDED: Set the first batch as default
    }));
    getWorkerId();
    setIsAddModalOpen(true);
  };

  // Open edit worker modal
  const openEditModal = (worker) => {
    // Determine the correct department ID
    const departmentId = typeof worker.department === 'object'
      ? worker.department._id
      : (departments.find(dept => dept.name === worker.department)?._id || worker.department);

    setSelectedWorker(worker);
    setFormData({
      name: worker.name,
      username: worker.username,
      department: departmentId, // Use the department ID
      photo: worker.photo || '',
      salary: worker.salary,
      password: '',
      confirmPassword: '',
      batch: worker.batch || '' // ADDED: Set the worker's current batch
    });
    setIsEditModalOpen(true);
  };
  // Open delete worker modal
  const openDeleteModal = (worker) => {
    setSelectedWorker(worker);
    setIsDeleteModalOpen(true);
  };

  const generateQRCode = async (username, uniqueId) => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(uniqueId, { width: 300 });
      const link = document.createElement('a');
      link.href = qrCodeDataURL;
      link.download = `${username}_${uniqueId}.png`;
      link.click();
    } catch (error) {
      console.error('QR Code generation error:', error);
    }
  };

  // Handle add worker
const handleAddWorker = async (e) => {
  e.preventDefault();

  // FIXED THIS LINE: Convert salary to string before trimming
  const trimmedName = formData.name.trim();
  const trimmedUsername = formData.username.trim();
  const trimmedPassword = formData.password.trim();
  const trimmedSalary = String(formData.salary).trim(); 

  // Validation checks
  if (!subdomain || subdomain == 'main') {
    toast.error('Subdomain is missing, check the url');
    return;
  }

  if (!trimmedName) {
    toast.error('Name is required and cannot be empty');
    return;
  }

  if (!trimmedUsername) {
    toast.error('Username is required and cannot be empty');
    return;
  }

  if (!trimmedSalary || trimmedSalary === '') {
    toast.error('Salary is required and cannot be empty');
    return;
  }

  if (isNaN(Number(trimmedSalary)) || Number(trimmedSalary) <= 0) {
    toast.error('Salary must be a positive number');
    return;
  }

  if (!trimmedPassword) {
    toast.error('Password is required and cannot be empty');
    return;
  }

  if (!formData.department) {
    toast.error('Department is required');
    return;
  }

  if (!formData.rfid) {
    toast.error('Unique ID is required');
    return;
  }
  
  // ADDED: Check if batch is selected
  if (!formData.batch) {
      toast.error('Batch is required');
      return;
  }

  try {
    const newWorker = await createWorker({
      ...formData,
      name: trimmedName,
      username: trimmedUsername,
      rfid: formData.rfid,
      salary: Number(trimmedSalary), // Ensure salary is a number
      subdomain,
      password: trimmedPassword,
      photo: formData.photo || '',
      batch: formData.batch, // ADDED: Include the batch
    });

    generateQRCode(trimmedUsername, formData.rfid);
    setWorkers(prev => [...prev, newWorker]);
    setIsAddModalOpen(false);
    toast.success('Employee added successfully');
  } catch (error) {
    console.error('Add Employee Error:', error);
    toast.error(error.message || 'Failed to add employee');
  }
};

  // Handle edit worker
  const handleEditWorker = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.username || !formData.department) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Password validation if provided
    if (formData.password) {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return;
      }
    }

    try {
      const updateData = {
        name: formData.name,
        username: formData.username,
        department: formData.department // Always include department
      };

      // ADDED: Only include batch if it has a value
      if (formData.batch) {
        updateData.batch = formData.batch;
      }

      // Only add password if provided
      if (formData.password) {
        updateData.password = formData.password;
      }

      if (formData.salary) {
        updateData.salary = formData.salary;
      }

      // Only include photo if a new file is selected
      if (formData.photo instanceof File) {
        updateData.photo = formData.photo;
      }

      const updatedWorker = await updateWorker(selectedWorker._id, updateData);

      setWorkers(prev =>
        prev.map(worker =>
          worker._id === selectedWorker._id ? {
            ...updatedWorker,
            department: departments.find(dept => dept._id === updatedWorker.department)?.name || updatedWorker.department
          } : worker
        )
      );

      setIsEditModalOpen(false);
      toast.success('Employee updated successfully');
      loadData();
    } catch (error) {
      console.error('Update Error:', error);
      toast.error(error.message || 'Failed to update employee');
    }
  };
  // Handle delete worker
  const handleDeleteWorker = async () => {
    try {
      await deleteWorker(selectedWorker._id);
      setWorkers(prev => prev.filter(worker => worker._id !== selectedWorker._id));
      setIsDeleteModalOpen(false);
      toast.success('Employee deleted successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to delete employee');
    }
  };

  // Table columns configuration
  const columns = [
    {
      header: 'Name',
      accessor: 'name',
      render: (record) => (
        <div className="flex items-center">
          {record?.photo && (
            <img
              src={record.photo
                ? record.photo
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(record.name)}`}

              alt="Employee"
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          {record?.name || 'Unknown'}
        </div>
      )
    },
    {
      header: 'Salary',
      accessor: 'salary'
    },
    {
      header: 'Employee ID',
      accessor: 'rfid'
    },
    {
      header: 'Batch',
      accessor: 'batch'
    },
    {
      header: 'Department',
      accessor: 'department'
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (worker) => (
        <div className="flex space-x-2">
          <button
            onClick={() => openEditModal(worker)}
            className="p-1 text-blue-600 hover:text-blue-800"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => openDeleteModal(worker)}
            className="p-1 text-red-600 hover:text-red-800"
          >
            <FaTrash />
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employee Management</h1>
        <Button
          variant="primary"
          onClick={openAddModal}
          className='flex items-center'
        >
          <FaPlus className="mr-2" /> Add Employee
        </Button>
      </div>

      <Card>
        <div className="mb-4">
          <input
            type="text"
            className="form-input"
            placeholder="Search by name, department, or Employee ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Spinner size="lg" />
          </div>
        ) : (
          <Table
            columns={columns}
            data={filteredWorkers}
            noDataMessage="No employee found."
          />
        )}
      </Card>

      {/* Add Worker Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Worker"
      >
        <form onSubmit={handleAddWorker}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              ref={nameInputRef}
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="text" className="form-label">Unique ID</label>
            <input
              type="text"
              id="rfid"
              name="rfid"
              className="form-input"
              value={formData.rfid}
              onChange={handleChange}
              required
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="number" className="form-label">{"Salary (per month)"}</label>
            <input
              type="number"
              id="salary"
              name="salary"
              className="form-input"
              value={formData.salary}
              onChange={handleChange}
              
            />
          </div>

          <div className="form-group relative">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="form-input pr-12"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="department" className="form-label">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              {departments.length === 0 ? (
                <option value="">No departments available</option>
              ) : (
                <>
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept._id} value={dept._id}>
                      {dept.name}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>

                  <div className="form-group">
                        <label htmlFor="batch" className="form-label">Batch</label>
                        <select
                            id="batch"
                            name="batch"
                            className="form-input"
                            value={formData.batch}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a batch</option>
                            {batches.map(batch => (
                                <option key={batch.batchName} value={batch.batchName}>
                                    {batch.batchName} ({batch.from} - {batch.to})
                                </option>
                            ))}
                        </select>
                    </div>

          <div className="form-group">
            <label htmlFor="photo" className="form-label">Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="form-input"
              onChange={handlePhotoChange}
              accept="image/*"
            />
          </div>

          <div className="flex justify-end mt-6 space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              Add Employee
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Worker Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={`Edit Employee: ${selectedWorker?.name}`}
      >
        <form onSubmit={handleEditWorker}>
          <div className="form-group">
            <label htmlFor="edit-name" className="form-label">Name</label>
            <input
              type="text"
              id="edit-name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-username" className="form-label">Username</label>
            <input
              type="text"
              id="edit-username"
              name="username"
              className="form-input"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-username" className="form-label">Salary</label>
            <input
              type="number"
              id="edit-username"
              name="salary"
              className="form-input"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          {/* New Password Fields */}
          <div className="form-group relative">
            <label htmlFor="edit-password" className="form-label">New Password (optional)</label>
            <input
              type={showEditPassword ? 'text' : 'password'}
              id="edit-password"
              name="password"
              className="form-input pr-12"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
            />
            <button
              type="button"
              onClick={() => setShowEditPassword(v => !v)}
              className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-600"
            >
              {showEditPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="form-group relative">
            <label htmlFor="edit-confirm-password" className="form-label">Confirm New Password</label>
            <input
              type={showEditConfirmPassword ? 'text' : 'password'}
              id="edit-confirm-password"
              name="confirmPassword"
              className="form-input pr-12"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
            />
            <button
              type="button"
              onClick={() => setShowEditConfirmPassword(v => !v)}
              className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-600"
            >
              {showEditConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="edit-photo" className="form-label">Photo</label>
            <div className="flex items-center">
              {selectedWorker?.photo && (
                <img
                  src={selectedWorker.photo}

                  alt="Current Photo"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
              )}
              <input
                type="file"
                id="edit-photo"
                name="photo"
                className="form-input"
                onChange={handlePhotoChange}
                accept="image/*"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="edit-department" className="form-label">Department</label>
            <select
              id="edit-department"
              name="department"
              className="form-input"
              value={formData.department}
              onChange={handleChange}
              required
            >
              {departments.map((dept) => (
                <option
                  key={dept._id}
                  value={dept._id}
                >
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* ADDED: Batch selection for edit form */}
          <div className="form-group">
            <label htmlFor="edit-batch" className="form-label">Batch</label>
            <select
              id="edit-batch"
              name="batch"
              className="form-input"
              value={formData.batch}
              onChange={handleChange}
              required
            >
              <option value="">Select a batch</option>
              {batches.map(batch => (
                <option key={batch.batchName} value={batch.batchName}>
                  {batch.batchName} ({batch.from} - {batch.to})
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end mt-6 space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              Update Employee
            </Button>
          </div>
        </form>
      </Modal>
      {/* Delete Worker Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Employee"
      >
        <p className="mb-4">
          Are you sure you want to delete <strong>{selectedWorker?.name}</strong>?
          This action cannot be undone.
        </p>

        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteWorker}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default WorkerManagement;