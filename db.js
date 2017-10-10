const pg = require('pg');

const SQLconnection =
  'postgres://xkvvjoiw:O6_92MrJi1A2YxAtGWFCO2PrqU3oJdGn@stampy.db.elephantsql.com:5432/xkvvjoiw';
const client = new pg.Client(SQLconnection);
client.connect();
allBooks();

function allBooks() {
  client.query('SELECT * From books', (err, result) => {
    console.log('Bookid, ISBN, Title, Authors');
    result.rows.forEach(row =>
      console.log(`${row.bookid}, ${row.isbn}, ${row.title}, ${row.authors}`)
    );
  });
}

module.exports = {
  client,
  allBooks
};
