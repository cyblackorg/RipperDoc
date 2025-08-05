#!/bin/bash

# Database initialization script
# This script ensures proper initialization order

echo "🚀 Starting database initialization..."

# First, run the main initialization script
psql -U postgres -d ripperdoc -f /docker-entrypoint-initdb.d/init.sql

# Then apply protections
echo "🛡️ Applying database protections..."
psql -U postgres -d ripperdoc -f /docker-entrypoint-initdb.d/protection.sql

echo "✅ Database initialization complete!" 