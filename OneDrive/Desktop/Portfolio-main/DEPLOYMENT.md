# Deployment Guide

This guide covers deploying the portfolio website to various platforms.

## 🚀 Quick Deploy

### Prerequisites
- Node.js 18+ installed
- Git configured locally
- Environment variables configured

## Platform-Specific Deployments

### 1. Replit (Current Platform)
The project is already configured for Replit with:
- `.replit` configuration file
- Automatic dependency management
- Built-in PostgreSQL support

**Steps:**
1. Ensure all environment variables are set in Replit Secrets
2. Run `npm run dev` to start development server
3. Use "Deploy" button in Replit for production deployment

### 2. Vercel
```bash
npm install -g vercel
vercel
```

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist/public`
- Install Command: `npm install`

### 3. Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/public
```

### 4. Railway
```bash
railway login
railway init
railway up
```

### 5. Heroku
```bash
heroku create your-portfolio-name
git push heroku main
```

## Environment Variables

Ensure these are configured in your deployment platform:

```env
DATABASE_URL=your_postgresql_url
NODE_ENV=production
PORT=5000
```

## Build Process

The project uses a two-step build process:

1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild compiles Express server to `dist/index.js`

```bash
npm run build      # Builds both frontend and backend
npm start          # Runs production server
```

## Performance Optimization

### Frontend Optimizations
- Code splitting with dynamic imports
- Optimized Three.js loading
- Compressed images and assets
- Tree-shaking for smaller bundles

### Backend Optimizations
- Efficient API endpoints
- Request compression
- Static file caching
- Database connection pooling

## Monitoring and Analytics

### Performance Monitoring
- Core Web Vitals tracking
- Animation performance metrics
- Load time optimization

### Error Tracking
- Client-side error logging
- Server error monitoring
- User experience analytics

## SSL and Security

### HTTPS Configuration
- SSL certificates (automatically handled by most platforms)
- Content Security Policy headers
- XSS protection

### API Security
- Rate limiting on contact form
- Input validation and sanitization
- Environment variable protection

## Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version (18+ required)
- Verify all dependencies are installed
- Ensure TypeScript compilation succeeds

**Database Connection:**
- Verify DATABASE_URL format
- Check PostgreSQL service status
- Confirm network connectivity

**Performance Issues:**
- Monitor Three.js animation performance
- Check for memory leaks in animations
- Optimize image loading

### Debug Commands
```bash
npm run type-check    # TypeScript validation
npm run build        # Test production build
npm run dev          # Local development server
```

## Rollback Strategy

### Quick Rollback
1. Identify last working deployment
2. Redeploy previous version
3. Monitor for stability

### Database Rollback
1. Backup current state
2. Restore from previous backup
3. Update application accordingly

## Maintenance

### Regular Updates
- Dependencies: Monthly security updates
- Content: Update portfolio projects
- Performance: Monitor and optimize

### Backup Strategy
- Daily database backups
- Weekly full project backups
- Version control for all changes