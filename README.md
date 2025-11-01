# 📚 LibraryApp

LibraryApp is a simple Express-based REST API for managing a collection of books. It allows users to retrieve book data, add new books, and fetch details of individual book by ID. Designed for testing backend workflows, it uses in-memory storage and includes automated tests with Jest and Supertest.

---

## 📘 API Routes

All routes are prefixed with /api.
GET /api/books
- Returns the full list of books.
GET /api/books/:id
- Returns a specific book by ID.
POST /api/books
- Adds a new book.
- Required fields: id, title, author, genre

### 🚀 Getting Started

- Clone the repository and install dependencies:

git clone https://github.com/younis-alafoo/LibraryApp.git
cd LibraryApp
npm install

▶️ Run the App
npm run dev

🧪 Run Tests
npm test

#### 🛠️ Technologies Used: 
- Node.js – JavaScript runtime
- Express – Web framework for routing and middleware
- Jest – Testing framework
- Supertest – HTTP assertions for API testing
- Nodemon – Auto-restarting dev server