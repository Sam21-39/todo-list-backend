const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();



const app = express();
const port = process.env.PORT;

// MongoDB connection
const user = process.env.DB_USER
const pass = process.env.DB_PASS 

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.pewtdqd.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


db.once('open', () => {
    console.log('Connected to MongoDB');
    
    
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
});