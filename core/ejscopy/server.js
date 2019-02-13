// server.js
// load the things we need
var express = require('express');
var app = express();
var ejs = require('ejs');
// server.use(express.static(__dirname + '/public_html'));
app.use(express.static(__dirname))
// console.dir (ejs);
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
// app.get('/', function(req, res) {
//     res.render('pages/index');
// });


// index page
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

const paart = 4242;
app.listen(paart);
console.log(paart + ' is the magic port');
