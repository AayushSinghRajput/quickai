# QuickAI - Versatile AI Tool Platform

QuickAI is a comprehensive AI-powered platform offering a suite of creative and productivity tools designed to simplify content creation, image manipulation, and document analysis.

![QuickAI Logo](client/public/favicon.svg)

## Features

QuickAI offers a variety of AI-powered tools including:

### Content Generation
- **Article Writing**: Generate high-quality articles based on your prompts
- **Blog Title Generation**: Create engaging and SEO-friendly blog titles
- **Resume Review**: Get professional feedback on your resume

### Image Tools
- **AI Image Generation**: Create custom images from text descriptions
- **Background Removal**: Automatically remove backgrounds from images
- **Object Removal**: Intelligently remove unwanted objects from photos

### Community & Support
- **User Community**: Share and explore AI-generated content with other users
- **Contact Support**: Reach out with questions or feedback
- **Documentation**: Comprehensive privacy policy and about information

## Tech Stack

### Frontend
- **React 19**: Modern UI framework
- **React Router**: For application routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Hot Toast**: For elegant notifications
- **Axios**: HTTP client for API requests
- **Clerk**: Authentication and user management

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **Clerk**: Authentication middleware
- **PostgreSQL/Neon**: For database management
- **Cloudinary**: Cloud-based image management
- **OpenAI/Gemini API**: For AI-powered features
- **Multer**: For file uploads handling

### DevOps
- **Vite**: Next-generation frontend tooling
- **Vercel**: For deployment and hosting
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Clerk account (for authentication)
- Cloudinary account (for image processing)
- Gemini API key (for AI features)
- PostgreSQL database (or Neon account)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AayushSinghRajput/quickai.git
cd quickai
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:

For the client (.env file in client directory):
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_URL=http://localhost:3000
```

For the server (.env file in server directory):
```
CLERK_SECRET_KEY=your_clerk_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
DATABASE_URL=your_postgres_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

4. Start development servers:

```bash
# Start client
cd client
npm run dev

# Start server
cd ../server
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Deployment

The application is configured for deployment on Vercel:

1. For the client:
   - Set up environment variables in Vercel project settings
   - Deploy the client directory

2. For the server:
   - Set up environment variables in Vercel project settings
   - Deploy the server directory

## Project Structure

```
quickai/
├── client/                 # Frontend React application
│   ├── public/             # Public assets
│   └── src/
│       ├── assets/         # Static assets (images, icons)
│       ├── components/     # Reusable UI components
│       │   ├── AiTools.jsx
│       │   ├── Navbar.jsx
│       │   └── ...
│       ├── pages/          # Application pages
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   ├── Dashboard.jsx
│       │   └── ...
│       ├── App.jsx         # Main application component
│       └── main.jsx        # Entry point
├── server/                 # Backend Express application
│   ├── configs/            # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Express middlewares
│   ├── routes/             # API routes
│   └── server.js           # Server entry point
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Clerk](https://clerk.com/) for authentication
- [OpenAI/Gemini](https://ai.google.dev/) for AI capabilities
- [Cloudinary](https://cloudinary.com/) for image processing
- [Vercel](https://vercel.com/) for hosting and deployment

---

© 2025 QuickAI. All rights reserved.