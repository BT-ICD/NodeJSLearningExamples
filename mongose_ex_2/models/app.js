/**
 * Leraning: About seperate file for model, route 
 * References:
 * https://github.com/hemakshis/Basic-MERN-Stack-App/blob/master/app.js
 * https://github.com/mongodb-developer/mern-stack-example/blob/main/mern/server/db/conn.js
 * https://github.com/didinj/mern-stack-crud/blob/master/routes/book.js
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const students = require('../models/studentRoute.js');

mongoose.connect('mongodb://localhost:27017/studentdb');
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

let app = express();


// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/students', students);

app.listen(3000, () => {
    console.log('Server started on port', 3000);
});