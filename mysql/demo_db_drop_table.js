var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * You ca delete an existing table by using the "DROP TABLE" statement
con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE customers";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});