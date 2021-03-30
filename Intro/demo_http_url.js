// Include the http module
var http = require('http');

/*
 * The function passed into http.createServer() has a `req` argument
 * that represents the request from the client as an object
 * (http.IncomingMessage object). This object has a property called `url`
 * which holds the part of the url that comes after the domain name.
*/
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);
/*
 * In this case, entering the url `http://localhost:8080/hello` will
 * produce `/hello` as result, while `http://localhost:8080/world` will
 * produce `/world` as result.
*/