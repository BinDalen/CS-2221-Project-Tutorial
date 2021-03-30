// * Include the File System module
var fs = require('fs');

// * The fs.appendFile() method appends the specified content
// * at the end of the specified file.

// * Append "This is my text" to the end of the file "mynewfile1.txt"
fs.appendFile('mynewfile1.txt', 'This is my text', function(err) {
    if (err) throw err;
    console.log('Updated!');
})