# ATRIOB2B - GitHub Pages Deployment Guide

## Prerequisites

1. Create a GitHub repository named `atriob2b` at https://github.com/new
2. Configure your git identity (if not already done):
   ```bash
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

## Deployment Steps

### 1. Initialize Git Repository

```bash
git init
git add -A
git commit -m "Initial commit: ATRIOB2B home page"
```

### 2. Connect to GitHub Repository

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/atriob2b.git
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the production version of your site
- Create/update the `gh-pages` branch
- Push the built files to GitHub

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select branch: `gh-pages` and folder: `/ (root)`
4. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/atriob2b/`

## Project Configuration

The following files have been configured for GitHub Pages:

### `vite.config.js`
- `base: '/atriob2b/'` - Sets the correct base path for GitHub Pages

### `package.json`
- `"deploy": "npm run build && gh-pages -d dist"` - Deployment script

## Future Updates

To deploy updates:

```bash
git add -A
git commit -m "Update: description of changes"
git push origin main
npm run deploy
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `public/CNAME` file with your domain
2. Configure DNS records with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

**Issue**: Site shows blank page or 404 errors
- Check that `base: '/atriob2b/'` matches your repository name
- Verify GitHub Pages is enabled and set to `gh-pages` branch

**Issue**: Build fails
- Run `npm run build` locally to check for errors
- Ensure all dependencies are installed: `npm install`

**Issue**: Changes not appearing
- Clear browser cache
- Wait a few minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for deployment status
