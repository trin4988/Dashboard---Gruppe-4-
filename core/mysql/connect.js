const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dashboard"
});

con.connect((err) => {
    if (err) throw err;
    console.log("connected");
    var sql = "SELECT * FROM mh_activity where vcClassroom = 'N228'";
    con.query(sql, (err, result, fields) => {
        if(err) throw err;
        for(var data of result) {
            console.log(data.vcSubject);
        }
    })
});