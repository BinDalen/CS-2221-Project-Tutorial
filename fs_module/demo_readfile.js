// * Use the require() method to include the File System module.
var fs = require('fs');
/*
 * Common use for the File System module:
 * + Read files
 * + Create files
 * + Update files
 * + Delete files
 * + Rename files
*/
var http = require('http');

// * fs.readFile() method is used to read files on your computer.
http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);