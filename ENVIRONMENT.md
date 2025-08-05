# RipperDoc Environment Configuration

This document explains how to configure RipperDoc for different environments (development vs production).

## Quick Setup

1. **Create environment file:**
   ```bash
   node scripts/setup-env.js
   ```

2. **Edit the .env file** with your specific values

3. **Start the application:**
   ```bash
   # Development
   NODE_ENV=development docker-compose up
   
   # Production
   NODE_ENV=production docker-compose up
   ```

## Environment Variables

### Required Variables

| Variable | Description | Development Default | Production Default |
|----------|-------------|-------------------|-------------------|
| `NODE_ENV` | Environment mode | `development` | `production` |
| `POSTGRES_USER` | Database username | `postgres` | `postgres` |
| `POSTGRES_PASSWORD` | Database password | `postgres` | `postgres` |
| `POSTGRES_DB` | Database name | `ripperdoc` | `ripperdoc` |
| `POSTGRES_HOST` | Database host | `db` | `db` |
| `POSTGRES_PORT` | Database port | `5432` | `5432` |
| `JWT_SECRET` | JWT signing secret | `ripperdoc-dev-secret-key` | `ripperdoc-prod-secret-key` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `LLM_PROVIDER` | AI provider | `openai` |
| `OPENAI_API_KEY` | OpenAI API key | None |
| `OPENAI_MODEL` | OpenAI model | `gpt-4o-mini` |
| `OPENAI_BASE_URL` | OpenAI API URL | `https://api.openai.com/v1` |
| `SERVER_PORT` | Server port | `5000` |
| `SERVER_HOST` | Server host | `0.0.0.0` |

### URL Configuration

#### Development URLs
- `REACT_APP_API_URL_DEV`: `http://localhost:5000`
- `REACT_APP_CLIENT_URL_DEV`: `http://localhost:3000`

#### Production URLs
- `REACT_APP_API_URL_PROD`: `http://ripperdoc.fezzant.com:5000`
- `REACT_APP_CLIENT_URL_PROD`: `http://ripperdoc.fezzant.com:3000`

## Configuration Files

### `config/development.js`
Development environment configuration with localhost URLs and debug logging.

### `config/production.js`
Production environment configuration with production URLs and info logging.

### `config/index.js`
Configuration loader that selects the appropriate config based on `NODE_ENV`.

## Usage Examples

### Local Development
```bash
# Set environment
export NODE_ENV=development

# Start services
docker-compose up
```

### Production Deployment
```bash
# Set environment
export NODE_ENV=production

# Start services
docker-compose up
```

### Custom Configuration
```bash
# Override specific variables
NODE_ENV=production \
REACT_APP_API_URL_PROD=http://your-domain.com:5000 \
REACT_APP_CLIENT_URL_PROD=http://your-domain.com:3000 \
docker-compose up
```

## Environment-Specific Features

### Development
- Debug logging enabled
- Localhost URLs
- Development JWT secret
- Detailed error messages

### Production
- Info logging only
- Production URLs
- Production JWT secret
- Minimal error messages

## Troubleshooting

### Common Issues

1. **Database connection fails:**
   - Check `POSTGRES_HOST` and `POSTGRES_PORT`
   - Ensure database container is running

2. **Client can't connect to server:**
   - Verify `REACT_APP_API_URL` is correct
   - Check CORS configuration

3. **Environment not loading:**
   - Ensure `.env` file exists
   - Check `NODE_ENV` is set correctly

### Debug Commands

```bash
# Check current environment
echo $NODE_ENV

# View environment variables
docker-compose config

# Check server logs
docker-compose logs server

# Check database logs
docker-compose logs db
```

## Security Notes

- **JWT_SECRET**: Use strong, unique secrets in production
- **Database passwords**: Use strong passwords in production
- **API keys**: Keep OpenAI API keys secure
- **URLs**: Ensure production URLs are correct and secure

## File Structure

```
RipperDoc/
├── config/
│   ├── development.js
│   ├── production.js
│   └── index.js
├── scripts/
│   └── setup-env.js
├── .env (created by setup script)
├── env.example
└── docker-compose.yml
``` 