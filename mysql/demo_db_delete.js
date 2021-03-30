var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * You can delete records from an existing table by using the "DELETE FROM" statement
con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    })
})

// * When executing a query, a result object is returned.
// * The result object contains information about how the query affected the table.
// * The result object returned from the code above looks like this:
// {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     serverStatus: 34,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
// * The values of the properties can be displayed like this:
// * console.log(result.affectedRows);