#!/usr/bin/env node

const { Pool } = require('pg');

// Load configuration
const config = require('../config');

const pool = new Pool({
    user: config.POSTGRES_USER,
    host: config.POSTGRES_HOST,
    database: config.POSTGRES_DB,
    password: config.POSTGRES_PASSWORD,
    port: config.POSTGRES_PORT,
});

async function testDatabaseConnection() {
    try {
        console.log('🧪 Testing database connection and table creation...\n');
        
        // Test basic connection
        const client = await pool.connect();
        console.log('✅ Database connection successful');
        
        // Test if users table exists
        const usersTable = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = 'users'
            );
        `);
        
        if (usersTable.rows[0].exists) {
            console.log('✅ Users table exists');
            
            // Test if we can query the table
            const userCount = await client.query('SELECT COUNT(*) FROM users');
            console.log(`✅ Users table is queryable (${userCount.rows[0].count} users)`);
            
            // Test if protection functions exist
            const protectionFunctions = await client.query(`
                SELECT routine_name 
                FROM information_schema.routines 
                WHERE routine_name IN ('prevent_dangerous_operations', 'prevent_database_drop', 'prevent_table_drop')
                AND routine_schema = 'public';
            `);
            
            console.log(`✅ Protection functions found: ${protectionFunctions.rows.length}`);
            
            // Test if triggers exist
            const triggers = await client.query(`
                SELECT trigger_name 
                FROM information_schema.triggers 
                WHERE trigger_name = 'prevent_user_deletion';
            `);
            
            if (triggers.rows.length > 0) {
                console.log('✅ Protection triggers are active');
            } else {
                console.log('⚠️ Protection triggers not found');
            }
            
        } else {
            console.log('❌ Users table does not exist');
        }
        
        client.release();
        
    } catch (error) {
        console.error('❌ Database test failed:', error.message);
    } finally {
        await pool.end();
    }
}

testDatabaseConnection().catch(console.error); 