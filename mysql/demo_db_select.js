var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * To select data from a table in MySQL, use the "SELECT" statement
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        // console.log(result.map(row => row.name)); Test code to select name from RowDataPacket
    })
})