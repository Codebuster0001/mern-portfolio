# 🚀 Deployment Checklist for Render

## Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All files are committed to Git
- [ ] No console.log statements in production code (except for debugging)
- [ ] Error handling is implemented throughout
- [ ] Input validation is in place
- [ ] Security headers are configured

### ✅ Environment Variables
- [ ] `NODE_ENV=production`
- [ ] `MONGO_URI` - MongoDB Atlas connection string
- [ ] `JWT_SECRET_KEY` - Strong, random secret key
- [ ] `JWT_EXPIRES=7d`
- [ ] `CLOUDINARY_COULD_NAME` - Cloudinary cloud name
- [ ] `CLOUDINARY_API_KEY` - Cloudinary API key
- [ ] `CLOUDINARY_SECRET_KEY` - Cloudinary secret key
- [ ] `SMPT_HOST=smtp.gmail.com`
- [ ] `SMPT_PORT=587`
- [ ] `SMPT_SERVICE=gmail`
- [ ] `SMPT_MAIL` - Your email address
- [ ] `SMPT_PASSWORD` - Gmail app password
- [ ] `PORTFOLIO_URL_PROD` - Your portfolio frontend URL
- [ ] `DASHBOARD_URL_PROD` - Your dashboard frontend URL

### ✅ Database Setup
- [ ] MongoDB Atlas cluster is created
- [ ] Database user is created with proper permissions
- [ ] Network access is configured (0.0.0.0/0 for Render)
- [ ] Connection string is tested locally
- [ ] Database name is "PORTFOLIO"

### ✅ Cloudinary Setup
- [ ] Cloudinary account is created
- [ ] Cloud name is noted
- [ ] API key and secret are generated
- [ ] Upload preset is configured (if needed)
- [ ] Folder structure is planned

### ✅ Email Setup
- [ ] Gmail account has 2FA enabled
- [ ] App password is generated
- [ ] SMTP settings are tested
- [ ] Email templates are ready

### ✅ Frontend Configuration
- [ ] Frontend URLs are correct
- [ ] CORS origins are properly configured
- [ ] API base URL is updated for production
- [ ] Credentials are included in requests

## Render Deployment Steps

### 1. Create Web Service
- [ ] Go to Render Dashboard
- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub repository
- [ ] Select the correct repository and branch

### 2. Configure Service
- [ ] **Name**: `mern-portfolio-backend`
- [ ] **Environment**: `Node`
- [ ] **Build Command**: `npm install`
- [ ] **Start Command**: `npm start`
- [ ] **Plan**: Choose appropriate plan (Free or Paid)

### 3. Environment Variables
Add all required environment variables in Render dashboard:
- [ ] Copy from your local `.env` file
- [ ] Ensure `NODE_ENV=production`
- [ ] Update URLs to production versions
- [ ] Double-check all secrets and keys

### 4. Deploy
- [ ] Click "Create Web Service"
- [ ] Monitor build logs
- [ ] Check for any build errors
- [ ] Verify deployment success

## Post-Deployment Testing

### ✅ Health Check
- [ ] Visit `/health` endpoint
- [ ] Verify server is running
- [ ] Check environment variables are loaded

### ✅ Database Connection
- [ ] Check server logs for database connection
- [ ] Verify "Connected to MongoDB database!" message
- [ ] Test database operations

### ✅ Authentication
- [ ] Test user registration
- [ ] Test user login
- [ ] Verify JWT tokens are generated
- [ ] Check cookies are set correctly

### ✅ API Endpoints
- [ ] Test all public endpoints
- [ ] Test protected endpoints with authentication
- [ ] Verify CORS is working
- [ ] Check file uploads work

### ✅ Email Functionality
- [ ] Test contact form
- [ ] Verify emails are sent
- [ ] Check password reset functionality

### ✅ Frontend Integration
- [ ] Test login from frontend
- [ ] Verify CORS allows frontend requests
- [ ] Check all API calls work
- [ ] Test file uploads from frontend

## Monitoring & Maintenance

### ✅ Logs
- [ ] Monitor Render logs regularly
- [ ] Set up log alerts if needed
- [ ] Check for errors and warnings

### ✅ Performance
- [ ] Monitor response times
- [ ] Check memory usage
- [ ] Verify database performance

### ✅ Security
- [ ] Regularly update dependencies
- [ ] Monitor for security vulnerabilities
- [ ] Rotate secrets periodically

## Troubleshooting Common Issues

### Login Issues
- [ ] Check JWT_SECRET_KEY is correct
- [ ] Verify CORS configuration
- [ ] Check cookie settings
- [ ] Test with Postman/curl

### Database Issues
- [ ] Verify MONGO_URI is correct
- [ ] Check MongoDB Atlas network access
- [ ] Ensure database user permissions
- [ ] Test connection locally

### Email Issues
- [ ] Verify SMTP configuration
- [ ] Check Gmail app password
- [ ] Test email sending locally
- [ ] Check email quotas

### File Upload Issues
- [ ] Verify Cloudinary configuration
- [ ] Check file size limits
- [ ] Test upload functionality
- [ ] Verify temp directory permissions

## Emergency Contacts
- Render Support: https://render.com/docs/help
- MongoDB Atlas Support: https://docs.atlas.mongodb.com/support/
- Cloudinary Support: https://support.cloudinary.com/

## Backup & Recovery
- [ ] Database backups are configured
- [ ] Environment variables are documented
- [ ] Recovery procedures are documented
- [ ] Rollback plan is ready 