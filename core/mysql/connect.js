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
toDay = new Date ();
toDayRead = toDay.getTime() / 1000;

con.connect((err) => {

    if (err) throw err;
    console.log("connected");
    // Find alle rum i Mediehuset 
    var sql = "SELECT distinct(vcClassroom) FROM mh_activity where vcClassroom between 'N110' and 'N122' or vcClassroom between 'N209' and 'N230'";
    con.query(sql, (err, result, fields) => {
        if(err) throw err;
        for(var rum of result) {
           
            // find aktuel aktivitet til de enkelte rum 
            sql = "select a.vcSubject, a.vcClassroom, a.vcClass, a.daTime, s.vcName, s.vcFriendlyName" 
                + " from mh_activity  a join mh_subject s"  
                + " where a.vcClassroom = '" + rum.vcClassroom + "' and a.daTime <= '" + toDayRead + "' and s.vcName = a.vcSubject"
                + " order by a.daTime desc limit 1";

            con.query(sql, (err, akt, fields) => {
                if (err) throw err; 
                for (var nu of akt) {
                    tidsstempel = new Date(nu.daTime * 1000);
                    aar = tidsstempel.getFullYear();
                    mndx = tidsstempel.getMonth() + 1;
                    if (mndx < 10) {
                        mnd = "0" + mndx;  
                    } else {
                        mnd = mndx;
                    };
                    if (tidsstempel.getDate() < 10) {
                        dag = "0" + tidsstempel.getDate();
                    } else {
                        dag = tidsstempel.getDate();
                    };
                    if (tidsstempel.getHours() < 10) {
                        hours = "0" + tidsstempel.getHours();
                    } else {
                        hours = tidsstempel.getHours();
                    };
                    if (tidsstempel.getMinutes() < 10) {
                        minutes = "0" + tidsstempel.getMinutes();
                    } else {
                        minutes = tidsstempel.getMinutes();
                    };
                    if (tidsstempel.getSeconds() < 10) {
                        seconds = "0" + tidsstempel.getSeconds();
                    } else {
                        seconds = tidsstempel.getSeconds();
                    };
                  
                    if (nu.vcFriendlyName > " ") {
                        fag = nu.vcFriendlyName;
                    } else {
                        fag = nu.vcName;
                    };
                    formattedTime = dag + '.' + mnd + '.' + aar + ' ' + hours + ':' + minutes + ':' + seconds;
                    console.log ("a-fag: " + nu.vcClass + " " + nu.vcClassroom + " " + fag + " " + formattedTime);
                };
            });

            // Find næste aktivitet til de enkelte rum 
            sql = "select a.vcSubject, a.vcClassroom, a.vcClass, a.daTime, s.vcName, s.vcFriendlyName" 
                + " from mh_activity  a join mh_subject s"  
                + " where a.vcClassroom = '" + rum.vcClassroom + "' and a.daTime > '" + toDayRead + "' and s.vcName = a.vcSubject"
                + " order by a.daTime asc limit 1";
              
            con.query(sql, (err, nakt, fields) => {
                if (err) throw err; 
                for (var nxt of nakt) {
                  
                    if (nxt.vcFriendlyName > " ") {
                        nfag = nxt.vcFriendlyName;
                    } else {
                        nfag = nxt.vcName;
                    };
                    tidsstempel = new Date(nxt.daTime * 1000);
                    aar = tidsstempel.getFullYear();
                    mndx = tidsstempel.getMonth() + 1;
                    if (mndx < 10) {
                        mnd = "0" + mndx;  
                    } else {
                        mnd = mndx;
                    };
                    if (tidsstempel.getDate() < 10) {
                        dag = "0" + tidsstempel.getDate();
                    } else {
                        dag = tidsstempel.getDate();
                    };
                    if (tidsstempel.getHours() < 10) {
                        hours = "0" + tidsstempel.getHours();
                    } else {
                        hours = tidsstempel.getHours();
                    };
                    if (tidsstempel.getMinutes() < 10) {
                        minutes = "0" + tidsstempel.getMinutes();
                    } else {
                        minutes = tidsstempel.getMinutes();
                    };
                    if (tidsstempel.getSeconds() < 10) {
                        seconds = "0" + tidsstempel.getSeconds();
                    } else {
                        seconds = tidsstempel.getSeconds();
                    };
                    if (nxt.vcFriendlyName > " ") {
                        fag = nxt.vcFriendlyName;
                    } else {
                        fag = nxt.vcName;
                    };
                    formattedTime = dag + '.' + mnd + '.' + aar + ' ' + hours + ':' + minutes + ':' + seconds;
                    console.log ("n-fag: " + nxt.vcClass + " " + nxt.vcClassroom + " - " + fag + " " + formattedTime);
                };
            });
        }
    }); 

    // Find aktuelle/aktive nyheder, som ligger på eller efter dagsdato. Vis højst 2 nyheder. Sorter så vi får de to første.
    newsRead = 0;
    sql = " select * from news where daStart >= '" + newsRead + "' and iIsActive = 1 order by daStart asc limit 2"
    con.query(sql, (err, nyheder, fields) => {
        if (err) throw err; 
        for (var nyhed of nyheder) {
            console.log ("nyhed: " + nyhed.txContent);
        };
    });

    // Find nyeste aktive video.
    medieRead = toDayRead;
    sql = " select * from medie where iIsActive = 1 order by daCreated desc limit 1"
    con.query(sql, (err, videoer, fields) => {
        if (err) throw err; 
        for (var video of videoer) {
            console.log ("video: " + video.vcRef + " " + video.vcFile);
        };
    });
});