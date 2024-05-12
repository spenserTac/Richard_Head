const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About page route
app.get('/richardwifsock', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'richardwifsock.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
