var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});