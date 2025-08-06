module.exports = {
  NODE_ENV: 'development',
  
  // Database Configuration
  POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
  POSTGRES_DB: process.env.POSTGRES_DB || 'ripperdoc',
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'db',
  POSTGRES_PORT: process.env.POSTGRES_PORT || 5432,
  
  // JWT Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'ripperdoc-dev-secret-key',
  
  // LLM Configuration
  LLM_PROVIDER: process.env.LLM_PROVIDER || 'openai',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  OPENAI_BASE_URL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
  
  // Server Configuration
  SERVER_PORT: process.env.SERVER_PORT || 5000,
  SERVER_HOST: process.env.SERVER_HOST || '0.0.0.0',
  
  // Client Configuration
  REACT_APP_API_URL: process.env.REACT_APP_API_URL_DEV || 'http://localhost:5000',
  REACT_APP_CLIENT_URL: process.env.REACT_APP_CLIENT_URL_DEV || 'http://localhost:3000',
  
  // Email Configuration
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'smtp.gmail.com',
  EMAIL_PORT: process.env.EMAIL_PORT || 587,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  
  // File Upload Configuration
  MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 10485760,
  UPLOAD_PATH: process.env.UPLOAD_PATH || './uploads',
  
  // Security Configuration (for deliberate vulnerabilities)
  ENABLE_RATE_LIMITING: process.env.ENABLE_RATE_LIMITING === 'true' || false,
  ENABLE_CORS: process.env.ENABLE_CORS !== 'false',
  ENABLE_HTTPS: process.env.ENABLE_HTTPS === 'true' || false,
  
  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug'
}; 