// * Include the File System module
var fs = require('fs');

// * The fs.writeFile() method replaces the specified file and content.

// * Replace the content of the file "mynewfile3.txt"
fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
    if (err) throw err;
    console.log('Updated!');
})