// Import Supertest to simulate HTTP requests to the Express app
const request = require('supertest');

// Import the Express app instance for testing
const app = require('../app');

describe('Books API', () => {
  const baseBooks = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
  ];


  //Test: GET /api/books, Ensure the endpoint returns all books with a 200 OK status
  it('GET /api/books should return all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.books.length).toBeGreaterThanOrEqual(5);
  });

  //Test: GET /api/books/:id, Ensure the endpoint returns the book by ID
  it('GET /api/books/:id should return a specific book', async () => {
    const res = await request(app).get('/api/books/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.book).toEqual(baseBooks[0]);
  });

  //Test: POST /api/books, Ensure a valid new book can be added successfully
  it('POST /api/books should add a new book', async () => {
    const newBook = { id: 6, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi' };
    const res = await request(app).post('/api/books').send(newBook);
    expect(res.statusCode).toBe(201);
    expect(res.body.book).toEqual(newBook);
  });

  //Test: POST /api/books with missing fields, Ensure the API returns 400 Bad Request for incomplete book data
  it('POST /api/books with missing fields should return 400', async () => {
    const incompleteBook = { id: 7, title: 'Incomplete Book' };
    const res = await request(app).post('/api/books').send(incompleteBook);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Missing required fields/);
  });

  //Test: POST /api/books with duplicate ID, Ensure the API returns 409 Conflict when trying to add a book with an existing ID
  it('POST /api/books with duplicate ID should return 409', async () => {
    const duplicateBook = baseBooks[0];
    const res = await request(app).post('/api/books').send(duplicateBook);
    expect(res.statusCode).toBe(409);
    expect(res.body.error).toMatch(/already exists/);
  });

  //Test: GET /api/books/:id with invalid ID, Ensure the API returns 404 Not Found for a non-existent book ID
  it('GET /api/books/:id with invalid ID should return 404', async () => {
    const res = await request(app).get('/api/books/999');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toMatch(/not found/);
  });
});