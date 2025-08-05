const development = require('./development');
const production = require('./production');

const env = process.env.NODE_ENV || 'development';

const configs = {
  development,
  production
};

const config = configs[env];

if (!config) {
  throw new Error(`Invalid NODE_ENV: ${env}`);
}

// Add environment-specific logging
console.log(`🌍 Environment: ${config.NODE_ENV}`);
console.log(`🔗 API URL: ${config.REACT_APP_API_URL}`);
console.log(`🌐 Client URL: ${config.REACT_APP_CLIENT_URL}`);

module.exports = config; 