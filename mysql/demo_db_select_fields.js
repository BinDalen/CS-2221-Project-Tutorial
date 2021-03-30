var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

// * The third parameter of the callback function is an array containing
// * information about each field in the result.
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("SELECT name, address FROM customers", function(err, result, fields) {
        if (err) throw err;
        // console.log(fields);

        /*
         * As you can see from the result of the example above, the fields object
         * is an array containing information about each field as an object.
         * To return e.g. the name of the second field, just refer
         * to the second array item's property
        */
       console.log(fields[1].name);
    })
})