const sampleBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
  { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
];

// Controller to handle GET /api/books
// Returns the full list of books
const getAllBooks = (req, res) => {
  res.status(200).json({ books: sampleBooks });
};

// Controller to handle POST /api/books
// Adds a new book to the collection if all required fields are present and the ID is unique.
const createBook = (req, res) => {
  const newBook = req.body;

  // Validate required fields
  if (!newBook.id || !newBook.title || !newBook.author || !newBook.genre) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check for duplicate ID
  const exists = sampleBooks.some((b) => b.id === newBook.id);
  if (exists) {
    return res.status(409).json({ error: 'Book with this ID already exists' });
  }
  sampleBooks.push(newBook);
  res.status(201).json({ book: newBook });
};

// Controller to handle GET /api/books/:id
// Returns a specific book by its ID, or a 404 error if not found.
const getBookById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = sampleBooks.find((b) => b.id === id);
  if (book) {
    res.status(200).json({ book });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

// Export all controller functions for use in the router
module.exports = {
  getAllBooks,
  createBook,
  getBookById,
};