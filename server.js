const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

// MongoDB Database connection using environment variables
const DB_URL = process.env.DB_URL;
const OPTION = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    autoIndex: true
};

mongoose.connect(DB_URL, OPTION)
    .then(() => {
        console.log("Database Connection Success");
    })
    .catch((err) => {
        console.log("Database Connection Error: ", err);
    });

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "The requested resource was not found!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


