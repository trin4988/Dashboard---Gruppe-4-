// Opsætning af node til mysql
const mysql = require('mysql');

// Connect til database 
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dashboard"
});

// Sæt dagsdato som timestamp for at læse de rigtige nyheder og de rigtige aktiviteter
timestmp = getDate().getTime() / 1000;

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