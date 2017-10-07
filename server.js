const express = require('express');
const path = require('path');
const pg = require('pg');

const db = require('./db')

const app = express();

// static routes
app.use(express.static(path.join(__dirname, 'public')));
// routes
app.get('/books', (req, res) => {
  db.client.query('SELECT * From books', (err, result) => {
    res.send(JSON.stringify(result.rows));
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
