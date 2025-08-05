#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 RipperDoc Environment Setup\n');

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', 'env.example');

if (fs.existsSync(envPath)) {
    console.log('✅ .env file already exists');
    console.log('📝 You can edit it manually or run this script to overwrite it');
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Do you want to overwrite the existing .env file? (y/N): ', (answer) => {
        if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
            createEnvFile();
        } else {
            console.log('📝 Keeping existing .env file');
        }
        rl.close();
    });
} else {
    createEnvFile();
}

function createEnvFile() {
    console.log('📝 Creating .env file...');
    
    // Read the example file
    if (!fs.existsSync(envExamplePath)) {
        console.error('❌ env.example file not found');
        process.exit(1);
    }
    
    const envContent = fs.readFileSync(envExamplePath, 'utf8');
    
    // Write the .env file
    fs.writeFileSync(envPath, envContent);
    
    console.log('✅ .env file created successfully!');
    console.log('📝 Please edit the .env file with your specific values:');
    console.log('   - Set NODE_ENV to "development" or "production"');
    console.log('   - Update the URLs for your environment');
    console.log('   - Add your OpenAI API key if using LLM features');
    console.log('   - Configure email settings if needed');
    console.log('\n🌍 Environment-specific URLs:');
    console.log('   Development: http://localhost:3000');
    console.log('   Production: http://ripperdoc.fezzant.com:3000');
} 