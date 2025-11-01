// Import the Express app instance from app.js
const app = require('./app');

const PORT = 3000;

//Start the server and begin listening for incoming HTTP requests
app.listen(PORT, () => {
  console.log(`📚 LibraryApp running on port ${PORT}`);
});