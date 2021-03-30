/*
 * There are built-in modules to split the query string into readable parts,
 * such as the url module
*/
var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
/*
 * With the address `http://localhost:8080/?year=2021&month=March`,
 * the result on the page would be `2021 March`.
*/