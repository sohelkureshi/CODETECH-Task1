import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// Use PORT 8000 for local development
const PORT = 8000;

// Optional: If you're using environment variables
const username = process.env.DB_USERNAME || 'yourLocalUsername';  // Default for local MongoDB
const password = process.env.DB_PASSWORD || 'yourLocalPassword';  // Default for local MongoDB

// Connect to MongoDB running on localhost
Connection(username, password);

// Start server
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
