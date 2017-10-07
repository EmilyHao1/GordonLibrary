const express = require('express');
const path = require('path');
const pg = require('pg');

const db = require('./db');
const books = require('./routes/books');

const app = express();

// static routes
app.use(express.static(path.join(__dirname, 'public')));
// routes
app.use('/books', books);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
