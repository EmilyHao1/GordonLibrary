const express = require('express');
const path = require('path');
const pg = require('pg');

const db = require('./db');
const book = require('./routes/book');

const app = express();

// static routes
app.use(express.static(path.join(__dirname, 'public')));
// routes
app.use('/book', book);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
