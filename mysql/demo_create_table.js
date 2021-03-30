var mysql = require('mysql');

// ! Make sure you define the name of the database when you create the connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * To create a table in MYSQL, use the "CREATE TABLE" statememt.
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = `CREATE TABLE customers (
//                 name VARCHAR(255),
//                 address VARCHAR(255));`;
//     con.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     })
// })

/*
 * When creating a table, you should also create a column with a unique key for each record.
 * This can be done by defining a column as "INT AUTO_INCREMENT PRIMARY KEY"
 * which will insert a unique number for each record.
 * Starting at 1, and increased by one for each record.
*/
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `CREATE TABLE customers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        address VARCHAR(255)
    );`;
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    })
})