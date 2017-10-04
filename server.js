const express = require('express');
const pg = require('pg');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

var SQLconnection =
  'postgres://xkvvjoiw:O6_92MrJi1A2YxAtGWFCO2PrqU3oJdGn@stampy.db.elephantsql.com:5432/xkvvjoiw';
var client = new pg.Client(SQLconnection);
client.connect();

client.query('SELECT * From books', function(err, result) {
  console.log('Bookid, ISBN, Title, Authors');
  result.rows.forEach(function(row) {
    console.log(
      row.bookid + ',' + row.isbn + ',' + row.title + ',' + row.authors
    );
  });
});
