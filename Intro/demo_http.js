// Node.js built in module HTTP allows Node.js to transfer
// data over the Hyper Text Transfer Protocol (HTTP).
// Use require() method to include the HTTP module
var http = require('http');

// The HTTP module can create an HTTP server that listens to
// server ports and gives a response back to the client.

//? create a server object
http.createServer(function(req, res) {
    /* 
     * If the response from the HTTP server is supposed to be displayed
     * as HTML, include an HTTP header with the correct content type
    */
    res.writeHead(200, {'Content-Type': 'text/html'});
    /* 
     * The first argument of the res.writeHead() method is the status code,
     * 200 means that all is OK, the second argument is an object containing
     * the response headers
    */

    res.write('Hello World!');  //? write a resonse to the client
    res.end();  //? end the response
}).listen(8080);    //? the server object listens on port 8080

// The fuction passed into the http.createServer() method
// will be executed when someone tries to access the computer on port 8080

/*
 ! HTTP statis codes
 * Informational responses(100-199)
 * Successful responses(200-299)
 * Redirects(300-399)
 * Client errors(400-499)
 * Server errors(500-599)
*/