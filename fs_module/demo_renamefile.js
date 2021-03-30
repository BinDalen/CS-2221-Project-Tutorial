// * Include the file system module
var fs = require('fs');

// * To rename a file with the File System module, use the fs.rename() method.

// * The fs.rename() method renames the specified file.
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
})