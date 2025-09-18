import express from "express";
import { submitContactMessage } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Simple test endpoint to verify the router is working
contactRouter.get('/test', (req, res) => {
  res.json({ success: true, message: 'Contact routes are working' });
});

contactRouter.post('/submit', submitContactMessage);

export default contactRouter;