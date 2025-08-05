const { Pool } = require('pg');

// Load configuration
const config = require('../config');

const waitForDatabase = async (maxRetries = 30, retryInterval = 2000) => {
    const pool = new Pool({
        user: config.POSTGRES_USER,
        host: config.POSTGRES_HOST,
        database: config.POSTGRES_DB,
        password: config.POSTGRES_PASSWORD,
        port: config.POSTGRES_PORT,
    });

    console.log('🔄 Waiting for database connection...');
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            await pool.query('SELECT 1');
            console.log('✅ Database connection established!');
            await pool.end();
            return true;
        } catch (error) {
            console.log(`⏳ Database not ready (attempt ${i + 1}/${maxRetries}): ${error.message}`);
            if (i === maxRetries - 1) {
                console.error('💥 Database connection failed after maximum retries');
                await pool.end();
                throw error;
            }
            await new Promise(resolve => setTimeout(resolve, retryInterval));
        }
    }
};

module.exports = { waitForDatabase }; 