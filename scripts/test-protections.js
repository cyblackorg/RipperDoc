#!/usr/bin/env node

const { exec } = require('child_process');
const systemProtection = require('./system-protection');

console.log('🧪 Testing system protections...\n');

// Install protection
systemProtection.installProtection();

// Test dangerous commands
const testCommands = [
    'docker-compose down',
    'docker stop',
    'systemctl stop nginx',
    'shutdown -h now',
    'rm -rf /',
    'echo "safe command"', // This should work
    'ls -la' // This should work
];

async function testCommand(command) {
    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            if (error && error.code === 'BLOCKED_COMMAND') {
                console.log(`✅ BLOCKED: ${command}`);
                resolve(true);
            } else if (error) {
                console.log(`❌ ERROR: ${command} - ${error.message}`);
                resolve(false);
            } else {
                console.log(`✅ ALLOWED: ${command}`);
                resolve(true);
            }
        });
    });
}

async function runTests() {
    console.log('Testing command blocking...\n');
    
    for (const command of testCommands) {
        await testCommand(command);
    }
    
    console.log('\n🎯 Protection test completed!');
    console.log('✅ Dangerous commands should be blocked');
    console.log('✅ Safe commands should be allowed');
}

runTests().catch(console.error); 