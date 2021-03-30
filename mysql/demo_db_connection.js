var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// })

// * Use SQL statements to read from (or write to) a MYSQL database.
// * This is also called "to query" the database.

// * The connection object created in the example above has a method
// * for querying the database
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "sql statement";  // Replace with SQL command
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
})