var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

/*
 * You can also select the records that starts, includes, or ends with a given letter or phrase.
 * Use the '%' wildcard to represent zero, one or multiple characters
*/
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    })
})