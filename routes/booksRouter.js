const express = require('express');
const booksController = require('../controllers/booksController');

const booksRouter = express.Router();

booksRouter.route('/books')
  .get(booksController.getAllBooks)
  .post(booksController.createBook);

booksRouter.route('/books/:id')
  .get(booksController.getBookById);

module.exports = booksRouter;