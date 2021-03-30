var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});


// * To select only some of the columns in a table, use the "SELECT" statement followed by the column name
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT name, address FROM customers", function(err, result, fields) {
        if (err) throw err;
        // console.log(result);

        /*
         * As you can see from the result of the example above, the result object is an array
         * containing each row as an object.
         * To return e.g. the address of the thrid record,
         * just refer to the third array object's address property
        */
       console.log(result[2].address);
    })
})