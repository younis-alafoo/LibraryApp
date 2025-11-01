const express = require('express');

// Import the booksRouter which handles all /api/books routes
const booksRouter = require('./routes/booksRouter');

const app = express();

//to Parses JSON requests
app.use(express.json());

// ount the booksRouter at the /api path
app.use('/api', booksRouter);


module.exports = app;