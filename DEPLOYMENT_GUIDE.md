# Deployment Guide - API URL Configuration

## How It Works

The application now **auto-detects** the API URL based on the domain it's deployed on. This means it works on **any domain** without configuration changes.

### Auto-Detection Logic:
- **Local development**: `http://localhost:5000`
- **Any domain**: Uses the current hostname + port 5000
  - `zero-health.fezzant.com` → `http://zero-health.fezzant.com:5000`
  - `ripperdoc.fezzant.com` → `http://ripperdoc.fezzant.com:5000`
  - `your-domain.com` → `http://your-domain.com:5000`

## Configuration Options

### Option 1: Auto-Detection (Recommended)
**Leave `REACT_APP_API_URL` empty** in your `.env` file:

```bash
# .env file
REACT_APP_API_URL=
```

The app will automatically detect and use the correct URL based on the domain.

### Option 2: Explicit Configuration
If you need to force a specific URL, set it in `.env`:

```bash
# .env file
REACT_APP_API_URL=http://zero-health.fezzant.com:5000
```

## Deployment Examples

### Deploy to zero-health.fezzant.com
```bash
# .env file
REACT_APP_API_URL=
```

That's it! The app will auto-detect `http://zero-health.fezzant.com:5000`

### Deploy to ripperdoc.fezzant.com
```bash
# .env file
REACT_APP_API_URL=
```

The app will auto-detect `http://ripperdoc.fezzant.com:5000`

### Deploy to a new domain
```bash
# .env file
REACT_APP_API_URL=
```

The app will auto-detect whatever domain you deploy it to.

### Local Development
```bash
# .env file
REACT_APP_API_URL=

# Or explicitly:
REACT_APP_API_URL=http://localhost:5000
```

## Environment Variables

### Required Variables:
- `OPENAI_API_KEY` - Your OpenAI API key
- `JWT_SECRET` - Your JWT secret key

### Optional Variables:
- `REACT_APP_API_URL` - Leave empty for auto-detection, or set explicit URL
- `NODE_ENV` - Set to `production` for production deployments

## Quick Start

1. **Copy example env file:**
   ```bash
   cp env.example .env
   ```

2. **Edit `.env` with your values:**
   ```bash
   nano .env
   ```

3. **Set required variables:**
   ```bash
   OPENAI_API_KEY=your-actual-api-key
   JWT_SECRET=your-secret-key
   REACT_APP_API_URL=    # Leave empty for auto-detection
   ```

4. **Deploy:**
   ```bash
   docker-compose down
   OPENAI_API_KEY=$OPENAI_API_KEY docker-compose build --no-cache
   OPENAI_API_KEY=$OPENAI_API_KEY docker-compose up -d
   ```

## Troubleshooting

### If API calls fail:
1. Check browser console for exact error
2. Verify `REACT_APP_API_URL` in `.env` (try setting it explicitly)
3. Check server logs: `docker logs ripperdoc_server_1`
4. Ensure server is accessible: `curl http://your-domain:5000`

### Switching domains:
No changes needed! Just deploy to the new domain and the app will auto-detect.

### Multiple deployments:
Each deployment uses its own `.env` file, so you can have different configurations per environment.

## File Structure

```
RipperDoc/
├── .env                    # Your environment variables (not in git)
├── env.example            # Example template
├── docker-compose.yml     # Reads variables from .env
└── client/src/utils/api.js # Auto-detection logic
```

## Security Notes

- `.env` file is already in `.gitignore` (not committed to git)
- Never commit `.env` with real API keys
- Keep your `OPENAI_API_KEY` and `JWT_SECRET` secure
- Change `JWT_SECRET` to a strong, unique value in production
