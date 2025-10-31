const sampleBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
  { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
];

const getAllBooks = (req, res) => {
  res.status(200).json({ books: sampleBooks });
};

const createBook = (req, res) => {
  const newBook = req.body;
  if (!newBook.id || !newBook.title || !newBook.author || !newBook.genre) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const exists = sampleBooks.some((b) => b.id === newBook.id);
  if (exists) {
    return res.status(409).json({ error: 'Book with this ID already exists' });
  }
  sampleBooks.push(newBook);
  res.status(201).json({ book: newBook });
};

const getBookById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = sampleBooks.find((b) => b.id === id);
  if (book) {
    res.status(200).json({ book });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
};