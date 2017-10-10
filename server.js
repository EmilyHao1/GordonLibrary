// const express = require('express');
// const path = require('path');
// const pg = require('pg');
//
// const db = require('./db');
// const book = require('./routes/book');
//
// const app = express();
//
// // static routes
// app.use(express.static(path.join(__dirname, 'public')));
// // routes
// app.use('/book', book);
//
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`listening at ${port}`);
// });

var http = require('http')
    , fs   = require('fs')
    , url  = require('url')
    , port = 8080;

var server = http.createServer (function (req, res) {
    var uri = url.parse(req.url)

    switch( uri.pathname ) {
        case '/':
            sendFile(res, 'public/indexLogin.html')
            break
        case '/indexLogin.html':
            sendFile(res, 'public/indexLogin.html')
            break
        case '/indexDashboard.html':
            sendFile(res, 'public/indexDashboard.html')
            break
        case '/indexBookSearch.html':
            sendFile(res, 'public/indexBookSearch.html')
            break
        case '/indexReserveTechSuite.html':
            sendFile(res, 'public/indexReserveTechSuite.html')
            break
        case '/css/style.css':
            sendFile(res, 'public/css/style.css', 'text/css')
            break
        case '/js/scripts.js':
            sendFile(res, 'public/js/scripts.js', 'text/javascript')
            break
        default:
            res.end('404 not found')
    }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, contentType) {
    contentType = contentType || 'text/html';

    fs.readFile(filename, function(error, content) {
        res.writeHead(200, {'Content-type': contentType})
        res.end(content, 'utf-8')
    })

}