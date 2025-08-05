# RipperDoc Security Protections

This document describes the security protections implemented in RipperDoc to prevent system disruption while maintaining deliberate vulnerabilities for testing purposes.

## Database Protections

### Protected Operations
- **Database Deletion**: Prevents dropping the entire database
- **Table Deletion**: Prevents dropping any tables in the database
- **User Deletion**: Prevents deletion of the last remaining user (ensures at least one user always exists)

### Implementation
- Database triggers prevent dangerous operations
- Event triggers block DROP operations
- User deletion is limited to prevent complete user removal

### Files
- `database/protection.sql` - Contains all database protection logic
- `database/init.sql` - Modified to include protection script

## System Protections

### Protected Commands
The following commands are blocked to prevent system disruption:

#### Docker Commands
- `docker-compose down`
- `docker-compose stop`
- `docker stop`
- `docker kill`

#### System Commands
- `systemctl stop`
- `systemctl disable`
- `shutdown`
- `halt`
- `poweroff`
- `reboot`

#### Process Commands
- `killall`
- `pkill`

#### File System Commands
- `rm -rf /`
- `rm -rf /var`
- `rm -rf /etc`
- `rm -rf /home`

#### Disk Commands
- `dd if=/dev/zero`
- `mkfs`
- `fdisk`
- `parted`

#### Network Commands
- `iptables -F`
- `ufw disable`

#### Service Commands
- `service stop`
- `init 0`
- `init 6`
- `telinit 0`
- `telinit 6`

### Implementation
- Overrides Node.js `exec` function to intercept dangerous commands
- Middleware checks API requests for dangerous commands
- Pattern matching for command variations

### Files
- `scripts/system-protection.js` - Main protection logic
- `scripts/test-protections.js` - Test script for protections
- `server.js` - Modified to include protection middleware

## Testing Protections

Run the test script to verify protections are working:

```bash
node scripts/test-protections.js
```

## Important Notes

1. **Deliberate Vulnerabilities**: These protections are designed to prevent system disruption while maintaining the deliberately vulnerable nature of the application for security testing.

2. **Database Access**: The database remains vulnerable to SQL injection and other attacks, but critical operations (deletion) are protected.

3. **Command Injection**: The application remains vulnerable to command injection attacks, but dangerous system commands are blocked.

4. **API Protection**: All API endpoints are checked for dangerous commands in request bodies and query parameters.

## Docker Configuration

The `docker-compose.yml` has been updated to include:
- Volume mounting for database protection scripts
- Database initialization with protection scripts

## Logging

Protected operations are logged with:
- 🚫 BLOCKED: Dangerous command detected
- 🛡️ System protection installed
- Detailed error messages for blocked operations 