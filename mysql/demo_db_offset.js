var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * If you want to return five records, starting from the third record,
// * you can use the "OFFSET" keyword
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";

    // * You can also write your SQL statement like this "LIMIT 2, 5",
    // * which returns the same as the offset example above
    // var sql = "SELECT * FROM customers LIMIT 2, 5";
    
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});