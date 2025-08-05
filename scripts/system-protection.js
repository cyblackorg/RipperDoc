const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// List of dangerous commands that could disrupt the system
const DANGEROUS_COMMANDS = [
    'docker-compose down',
    'docker-compose stop',
    'docker stop',
    'docker kill',
    'systemctl stop',
    'systemctl disable',
    'shutdown',
    'halt',
    'poweroff',
    'reboot',
    'killall',
    'pkill',
    'rm -rf /',
    'rm -rf /var',
    'rm -rf /etc',
    'rm -rf /home',
    'dd if=/dev/zero',
    'mkfs',
    'fdisk',
    'parted',
    'iptables -F',
    'ufw disable',
    'service stop',
    'init 0',
    'init 6',
    'telinit 0',
    'telinit 6'
];

// List of dangerous patterns
const DANGEROUS_PATTERNS = [
    /docker.*down/i,
    /docker.*stop/i,
    /docker.*kill/i,
    /systemctl.*stop/i,
    /systemctl.*disable/i,
    /shutdown/i,
    /halt/i,
    /poweroff/i,
    /reboot/i,
    /killall/i,
    /pkill/i,
    /rm.*-rf.*\//i,
    /dd.*if=\/dev\/zero/i,
    /mkfs/i,
    /fdisk/i,
    /parted/i,
    /iptables.*-F/i,
    /ufw.*disable/i,
    /service.*stop/i,
    /init.*[06]/i,
    /telinit.*[06]/i
];

// Override the exec function to intercept dangerous commands
const originalExec = exec;

function safeExec(command, options, callback) {
    // Check for dangerous commands
    const normalizedCommand = command.toLowerCase().trim();
    
    // Check exact matches
    for (const dangerousCmd of DANGEROUS_COMMANDS) {
        if (normalizedCommand.includes(dangerousCmd.toLowerCase())) {
            console.error(`🚫 BLOCKED: Dangerous command detected: ${command}`);
            const error = new Error(`Command blocked for security: ${command}`);
            error.code = 'BLOCKED_COMMAND';
            
            if (callback) {
                callback(error, null, null);
            } else {
                return Promise.reject(error);
            }
            return;
        }
    }
    
    // Check pattern matches
    for (const pattern of DANGEROUS_PATTERNS) {
        if (pattern.test(command)) {
            console.error(`🚫 BLOCKED: Dangerous command pattern detected: ${command}`);
            const error = new Error(`Command blocked for security: ${command}`);
            error.code = 'BLOCKED_COMMAND';
            
            if (callback) {
                callback(error, null, null);
            } else {
                return Promise.reject(error);
            }
            return;
        }
    }
    
    // If command is safe, proceed with original exec
    return originalExec(command, options, callback);
}

// Override the global exec function
module.exports = {
    safeExec,
    DANGEROUS_COMMANDS,
    DANGEROUS_PATTERNS,
    installProtection: () => {
        // Override the global exec function
        global.exec = safeExec;
        require('child_process').exec = safeExec;
        
        console.log('🛡️ System protection installed - dangerous commands are now blocked');
    }
}; 