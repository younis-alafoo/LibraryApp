const express = require('express');
const booksController = require('../controllers/booksController');

const booksRouter = express.Router();

//get to Returns the full list of books, post to Add a new book to the list. 
booksRouter.route('/books')
  .get(booksController.getAllBooks)
  .post(booksController.createBook);

//Returns a specific book by its ID.
booksRouter.route('/books/:id')
  .get(booksController.getBookById);

// Export the router to be used in the main app
module.exports = booksRouter;