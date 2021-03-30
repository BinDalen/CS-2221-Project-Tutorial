// To include a module, use the `require()` function with the 
// name of the module
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

// Notes
/* Type `node myfirst.js` in the command prompt -
    a server will now be initiated on port 8080
    and therefore it is accessible through http://localhost:8080
*/
