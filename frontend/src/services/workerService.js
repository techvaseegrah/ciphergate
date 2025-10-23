import api from './api';
import uploadUtils from '../utils/uploadUtils';
import { getAuthToken } from '../utils/authUtils';

export const getUniqueId = async () => {
  try {
    const response = await api.get('/workers/generate-id');
    console.log(response.data);
    return response.data || [];
  } catch (error) {
    console.error('Workers fetch error:', error);
    return [];
  }
};

export const createWorker = async (workerData) => {
  try {
    console.log('Worker data:', workerData);

    // Enhanced client-side validation
    if (!workerData.name || workerData.name.trim() === '') {
      throw new Error('Name is required and cannot be empty');
    }
    if (!workerData.username || workerData.username.trim() === '') {
      throw new Error('Username is required and cannot be empty');
    }
    if (!workerData.subdomain || workerData.subdomain.trim() === '') {
      throw new Error('Subdomain is missing, please check the url');
    }
    if (!workerData.password || workerData.password.trim() === '') {
      throw new Error('Password is required and cannot be empty');
    }
    // FIX: Convert salary to string before calling trim()
    if (!workerData.salary || String(workerData.salary).trim() === '') {
      throw new Error('Salary is required and cannot be empty');
    }
    if (!workerData.department) {
      throw new Error('Department is required');
    }
    if (!workerData.batch) { // ADDED THIS
      throw new Error('Batch is required');
    }

    const urlResponse = await uploadUtils(workerData.photo);
    workerData.photo = urlResponse;

    const response = await api.post('/workers', workerData);
    return response.data;
  } catch (error) {
    console.error('Worker creation error:', error.response?.data || error);
    throw error.response?.data || new Error('Failed to create worker');
  }
};  

export const getWorkers = async (subdomain) => {
  try {
    const response = await api.post('/workers/all', subdomain);
    return response.data || [];
  } catch (error) {
    console.error('Workers fetch error:', error);
    return [];
  }
};

export const readWorkers = async (subdomain) => {
  try {
    const response = await api.post('/workers/all', { subdomain }, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`
      }
    });
    return response.data || [];
  } catch (error) {
    console.error('Workers fetch error:', error);
    throw error.response?.data || new Error('Failed to fetch workers');
  }
};

export const getPublicWorkers = async (subdomain) => {
  try {
    const response = await api.post('/workers/public', subdomain);
    return response.data || [];
  } catch (error) {
    console.error('Public workers fetch error:', error);
    return [];
  }
};

export const updateWorker = async (id, workerData) => {
  try {
    // Check for batch data in workerData and add validation if needed
    if (workerData.photo) {
      const urlResponse = await uploadUtils(workerData.photo);
      workerData.photo = urlResponse;
    }

    // ADDED: Client-side validation for batch
    if ('batch' in workerData && !workerData.batch) {
      throw new Error('Batch is required');
    }

    const response = await api.put(`/workers/${id}`, workerData);
    return response.data;
  } catch (error) {
    console.error('Update Worker Error:', {
      response: error.response,
      data: error.response?.data,
      status: error.response?.status
    });
    throw error.response ? error.response.data : new Error('Failed to update worker');
  }
};

export const deleteWorker = async (id) => {
  try {
    const response = await api.delete(`/workers/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to delete worker');
  }
};