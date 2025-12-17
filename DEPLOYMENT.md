# Deployment Guide

## Deploying to Render

### Quick Deploy (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` configuration
   - Click "Create Web Service"

### Manual Configuration

If the automatic detection doesn't work, use these settings:

- **Name**: wendy-portfolio (or any name you prefer)
- **Environment**: Node
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 20.19.0 (set in Environment Variables)

### Important Notes

1. **Port Configuration**: The app is configured to run on port 10000, which is Render's default port.

2. **Build vs Dev**: 
   - ❌ Don't use `npm run dev` on Render (development server)
   - ✅ Use `npm start` (production server with built files)

3. **Environment Variables** (if using EmailJS):
   - Add your EmailJS credentials in Render's Environment Variables section:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

## Deploying to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

## Deploying to Vercel

1. **Push to GitHub** (same as above)

2. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

## Testing Production Build Locally

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Serve the built files
npm start
```

Visit `http://localhost:10000` to see the production version.

## Troubleshooting

### Render: "No open ports detected"
- **Cause**: Using `npm run dev` instead of `npm start`
- **Solution**: Make sure your Start Command is `npm start`

### Build fails on Render
- **Cause**: Missing dependencies or Node version mismatch
- **Solution**: Check that Node version is set to 20.19.0 or higher

### EmailJS not working
- **Cause**: Environment variables not set
- **Solution**: Add EmailJS credentials in your deployment platform's environment variables section

### 404 errors on page refresh
- **Cause**: SPA routing not configured
- **Solution**: The `render.yaml` and `netlify.toml` files already handle this with redirect rules