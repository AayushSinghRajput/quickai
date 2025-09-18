import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import contactRouter from './routes/contactRoutes.js';

const app = express()

await connectCloudinary()


// Configure CORS with more specific options
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', process.env.CLIENT_URL].filter(Boolean),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Increase payload limit for large messages
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Log requests in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

app.use(clerkMiddleware())



app.get('/',(req,res)=>res.send('Server is Live...'))

// Test endpoint for checking API health
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'API is working correctly',
    timestamp: new Date().toISOString()
  });
});

// Public routes that don't require auth
app.use('/api/contact', contactRouter)

// Protected routes
app.use(requireAuth())
app.use('/api/ai',aiRouter)
app.use('/api/user',userRouter)

// Handle 404 errors for API routes
app.use('/api/*', (req, res) => {
  console.log(`404 Not Found: ${req.originalUrl}`);
  res.status(404).json({ 
    success: false, 
    message: 'API endpoint not found',
    path: req.originalUrl
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Server is running on port:',PORT);
})