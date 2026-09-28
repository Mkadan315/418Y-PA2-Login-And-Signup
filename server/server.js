require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

// This is the address of the database
const MONGO_URI = process.env.MONGO_URI;
// This lets the React app (different port) talk to this server
app.use(cors());

// This lets us read the JSON sent from the frontend
app.use(express.json());

// All the signup and login routes are located here
app.use('/api/auth', authRoutes);

// This connects to the MongoDB first. and then starts to listen for any requests
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB!');
        app.listen(PORT, () => console.log('Server is running on port ' + PORT));
    })
    .catch((error) => {
        console.log('Could not connect to MongoDB:', error)
    });
