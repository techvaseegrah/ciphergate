import api from './api';

const API_URL = '/tickets';

// Get all tickets
export const getTickets = async (params = {}) => {
    try {
        const response = await api.get(API_URL, { params });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Error fetching tickets';
    }
};

// Create new ticket
export const createTicket = async (ticketData) => {
    try {
        const response = await api.post(API_URL, ticketData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Error creating ticket';
    }
};

// Update ticket
export const updateTicket = async (id, ticketData) => {
    try {
        const response = await api.put(`${API_URL}/${id}`, ticketData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Error updating ticket';
    }
};

// Delete ticket
export const deleteTicket = async (id) => {
    try {
        const response = await api.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Error deleting ticket';
    }
};
