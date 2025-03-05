
// server.js (Main Entry Point)
const express = require('express');
// const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const mongoose = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Load environment variables
// dotenv.config();

// Initialize Express app
const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

//Mongo DB Database connection in Atlas 
const DB_URL ="mongodb+srv://<db_username>:<db_password>@cluster0.vohntst.mongodb.net/IcPractice?retryWrites=true&w=majority&appName=Cluster0";
let OPTION ={user:'icuser', pass:'icuser',autoIndex:true} 

mongoose.connect(DB_URL, OPTION)
    .then(() => {
        console.log("Database Connection Success")
    })
    .catch((err) => {
        console.log("Database Connection Error: ", err);
    }) 


 // 404 handler
 app.use((req, res, next) => {
            res.status(404).json({
                message: "The requested resource was not found!"
            })
        })
    

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

