// API utility for environment-based URL configuration
const getApiUrl = () => {
  // Check for environment variable first (highest priority)
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }

  // Auto-detect based on current hostname
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;

    // If we're on localhost, use local API
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000';
    }

    // For any other hostname, use the same hostname with port 5000
    // This works for ANY domain: zero-health.fezzant.com, yourdomain.com, etc.
    if (hostname && hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return `http://${hostname}:5000`;
    }
  }

  // Final fallback
  return 'http://localhost:5000';
};

export const API_BASE_URL = getApiUrl();

// Debug logging
console.log('🌐 API Base URL:', API_BASE_URL);
console.log('🔍 Environment:', process.env.NODE_ENV);
console.log('📍 Current Location:', typeof window !== 'undefined' ? window.location.href : 'Server-side');

// Helper function to build API endpoints
export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Create a standardized fetch wrapper with credentials
export const fetchWithCredentials = async (url, options = {}) => {
  const mergedOptions = {
    ...options,
    credentials: 'include',
    headers: {
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...options.headers,
    },
  };

  const response = await fetch(url, mergedOptions);
  return response;
};

// Helper function to build upload URLs
export const buildUploadUrl = (filePath) => {
  return `${API_BASE_URL}/uploads/${filePath}`;
};

// Common API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/api/login',
  REGISTER: '/api/register',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  APPOINTMENTS: '/api/appointments',
  LAB_RESULTS: '/api/lab-results',
  PRESCRIPTIONS: '/api/prescriptions',
  MESSAGES: '/api/messages',
  PATIENTS: '/api/patients',
  DOCTORS: '/api/doctors',
  ADMIN_USERS: '/api/admin/users',
  ADMIN_STATISTICS: '/api/admin/statistics',
  CHATBOT_CHAT: '/api/chatbot/chat',
  CHATBOT_HISTORY: '/api/chatbot/history',
  UPLOADS: '/uploads',
}; 