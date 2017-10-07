const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {
  const title = req.query.title || '';
  db.client.query(
    `SELECT * From books WHERE UPPER(Title) LIKE '%${title.toUpperCase()}%'`,
    (err, result) => {
      res.send(JSON.stringify(result.rows));
    }
  );
});

module.exports = router;
