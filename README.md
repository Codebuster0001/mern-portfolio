# MERN Portfolio Backend

A robust backend API for a MERN stack portfolio application with authentication, file uploads, and email functionality.

## 🚀 Features

- **User Authentication** - JWT-based login/register system
- **File Upload** - Cloudinary integration for resume uploads
- **Email System** - Contact form and password reset functionality
- **CRUD Operations** - Projects, skills, timeline management
- **Security** - CORS, rate limiting, input validation
- **Production Ready** - Optimized for deployment on Render

## 📋 Prerequisites

- Node.js >= 18.0.0
- MongoDB Atlas account
- Cloudinary account
- Gmail account (for SMTP)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Copy `env.example` to `.env` and configure:

### Required Variables
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET_KEY` - Secret key for JWT tokens
- `JWT_EXPIRES` - JWT token expiration (e.g., "7d")
- `CLOUDINARY_COULD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_SECRET_KEY` - Cloudinary secret key
- `SMPT_HOST` - SMTP host (e.g., smtp.gmail.com)
- `SMPT_PORT` - SMTP port (e.g., 587)
- `SMPT_SERVICE` - SMTP service (e.g., gmail)
- `SMPT_MAIL` - Your email address
- `SMPT_PASSWORD` - Your email app password

### Optional Variables
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 8000)
- `PORTFOLIO_URL` - Frontend portfolio URL
- `DASHBOARD_URL` - Frontend dashboard URL
- `PORTFOLIO_URL_PROD` - Production portfolio URL
- `DASHBOARD_URL_PROD` - Production dashboard URL

## 🚀 Deployment on Render

### 1. Prepare Your Repository
- Ensure all files are committed to Git
- Make sure `package.json` has correct scripts
- Verify `env.example` is in your repository

### 2. Create Render Service
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `mern-portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Choose appropriate plan

### 3. Environment Variables
Add these environment variables in Render dashboard:

```
NODE_ENV=production
MONGO_URI=your-mongodb-atlas-connection-string
JWT_SECRET_KEY=your-super-secret-jwt-key
JWT_EXPIRES=7d
CLOUDINARY_COULD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_SECRET_KEY=your-cloudinary-secret-key
SMPT_HOST=smtp.gmail.com
SMPT_PORT=587
SMPT_SERVICE=gmail
SMPT_MAIL=your-email@gmail.com
SMPT_PASSWORD=your-gmail-app-password
PORTFOLIO_URL_PROD=https://your-portfolio-domain.com
DASHBOARD_URL_PROD=https://your-dashboard-domain.com
```

### 4. Deploy
- Click "Create Web Service"
- Render will automatically deploy your application
- Monitor the build logs for any issues

## 📡 API Endpoints

### Authentication
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout
- `GET /api/v1/user/me` - Get current user
- `PUT /api/v1/user/me/profile/update` - Update profile
- `PUT /api/v1/user/update/password` - Update password
- `POST /api/v1/user/forgot/password` - Forgot password
- `PUT /api/v1/user/password/reset/:token` - Reset password

### Projects
- `GET /api/v1/projects/getall` - Get all projects
- `GET /api/v1/projects/:id` - Get project by ID
- `POST /api/v1/projects/add` - Add new project (admin)
- `PUT /api/v1/projects/update/:id` - Update project (admin)
- `DELETE /api/v1/projects/delete/:id` - Delete project (admin)

### Skills
- `GET /api/v1/skills/getall` - Get all skills
- `POST /api/v1/skills/add` - Add new skill (admin)
- `DELETE /api/v1/skills/delete/:order` - Delete skill (admin)

### Timeline
- `GET /api/v1/timeline/getall` - Get all timeline entries
- `POST /api/v1/timeline/create` - Add timeline entry (admin)
- `PUT /api/v1/timeline/update/:id` - Update timeline entry (admin)
- `DELETE /api/v1/timeline/delete/:id` - Delete timeline entry (admin)

### Messages
- `POST /api/v1/message/contact` - Send contact message
- `GET /api/v1/message/getall` - Get all messages (admin)
- `DELETE /api/v1/message/delete/:id` - Delete message (admin)

### Health Check
- `GET /health` - Server health status

## 🔍 Troubleshooting

### Common Issues

1. **Login Failed**
   - Check JWT_SECRET_KEY is set correctly
   - Verify CORS configuration matches frontend URL
   - Check database connection

2. **Database Connection Error**
   - Verify MONGO_URI is correct
   - Check MongoDB Atlas network access
   - Ensure database user has proper permissions

3. **Email Not Sending**
   - Verify SMTP configuration
   - Check Gmail app password is correct
   - Ensure 2FA is enabled on Gmail

4. **File Upload Issues**
   - Check Cloudinary configuration
   - Verify file size limits
   - Check temp directory permissions

### Debug Endpoints
- `GET /api/v1/user/test` - Test user routes
- `GET /health` - Server health check

## 📝 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - Build script (no-op for Node.js)
- `npm test` - Test script (placeholder)

## 🔒 Security Features

- JWT authentication with secure cookies
- CORS protection
- Input validation and sanitization
- Rate limiting (via middleware)
- Security headers
- File upload restrictions

## 📊 Monitoring

The application includes:
- Request logging
- Error tracking
- Health check endpoint
- Database connection monitoring
- Email delivery confirmation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License. 