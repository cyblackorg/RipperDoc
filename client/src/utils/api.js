// API utility for environment-based URL configuration
const getApiUrl = () => {
  // Check for environment variable first
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Check if we're running locally by checking the current hostname
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const port = window.location.port;
    
    // If we're on localhost or 127.0.0.1, use local API
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000';
    }
    
    // If we're on the production domain, use production API
    if (hostname === 'ripperdoc.fezzant.com') {
      return 'http://ripperdoc.fezzant.com:5000';
    }
  }
  
  // Default fallback - try to detect based on current location
  if (typeof window !== 'undefined') {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    return `${protocol}//${hostname}:5000`;
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