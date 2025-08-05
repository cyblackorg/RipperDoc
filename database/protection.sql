-- Database Protection Script
-- This script adds protections to prevent critical database operations
-- while keeping the application deliberately vulnerable for testing

-- Create a function to prevent dangerous operations
CREATE OR REPLACE FUNCTION prevent_dangerous_operations()
RETURNS TRIGGER AS $$
BEGIN
    -- Prevent dropping of critical tables
    IF TG_OP = 'DROP' THEN
        RAISE EXCEPTION 'DROP operations are not allowed on this database';
    END IF;
    
    -- Prevent deletion of all users (keep at least one admin)
    IF TG_OP = 'DELETE' AND TG_TABLE_NAME = 'users' THEN
        -- Count remaining users after deletion
        IF (SELECT COUNT(*) FROM users) <= 1 THEN
            RAISE EXCEPTION 'Cannot delete the last user. At least one user must remain in the system.';
        END IF;
    END IF;
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Create triggers to prevent dangerous operations
CREATE TRIGGER prevent_user_deletion
    BEFORE DELETE ON users
    FOR EACH ROW
    EXECUTE FUNCTION prevent_dangerous_operations();

-- Create a function to prevent database dropping
CREATE OR REPLACE FUNCTION prevent_database_drop()
RETURNS EVENT_TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Database drop operations are not allowed';
END;
$$ LANGUAGE plpgsql;

-- Create event trigger to prevent database dropping
CREATE EVENT TRIGGER prevent_db_drop ON sql_drop
    EXECUTE FUNCTION prevent_database_drop();

-- Create a function to prevent table dropping
CREATE OR REPLACE FUNCTION prevent_table_drop()
RETURNS EVENT_TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Table drop operations are not allowed';
END;
$$ LANGUAGE plpgsql;

-- Create event trigger to prevent table dropping
CREATE EVENT TRIGGER prevent_table_drop ON sql_drop
    EXECUTE FUNCTION prevent_table_drop();

-- Grant necessary permissions for the protection functions
GRANT EXECUTE ON FUNCTION prevent_dangerous_operations() TO postgres;
GRANT EXECUTE ON FUNCTION prevent_database_drop() TO postgres;
GRANT EXECUTE ON FUNCTION prevent_table_drop() TO postgres;

-- Create a view to monitor critical operations (for logging purposes)
CREATE OR REPLACE VIEW critical_operations_log AS
SELECT 
    'User deletion attempt' as operation_type,
    'users' as table_name,
    NOW() as timestamp
WHERE EXISTS (SELECT 1 FROM users WHERE id IS NOT NULL);

-- Add a comment to document the protection
COMMENT ON FUNCTION prevent_dangerous_operations() IS 'Protects against dangerous database operations while maintaining vulnerability for testing';
COMMENT ON FUNCTION prevent_database_drop() IS 'Prevents database dropping operations';
COMMENT ON FUNCTION prevent_table_drop() IS 'Prevents table dropping operations'; 