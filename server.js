const http = require('http');
const express = require('express');
var   pg = require('pg'),
      fs = require('fs'),
      url = require('url')

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

var SQLconnection =
  'postgres://xkvvjoiw:O6_92MrJi1A2YxAtGWFCO2PrqU3oJdGn@stampy.db.elephantsql.com:5432/xkvvjoiw';
var client = new pg.Client(SQLconnection);
client.connect();


//test querying
var query = client.query('SELECT * From books', function(err, result) {
  console.log('Bookid, ISBN, Title, Authors');
  result.rows.forEach(function(row) {
    console.log(
      row.bookid + ',' + row.isbn + ',' + row.title + ',' + row.authors
    );
  });
});

app.get('/', function(req, res) {
  console.log(query)
  sendIndex(res)
});





//server start
// server.listen(process.env.PORT || port)
// console.log('listening on 8080')


function sendIndex(res, results) {
  // sendFile(res, query)
  sendFile(res, 'public/indexDashboard.html')
}


function sendResult(res, results) {
  console.log("Sending Results")

  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  res.end(JSON.stringify(results), 'utf-8')
}

function sendFile(res, filename, contentType) {
  console.log('Sending File:', filename)
  contentType = contentType || 'text/html'

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {
      'Content-type': contentType
    })
    res.end(content, 'utf-8')
  })
}
