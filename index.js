var express = require("express");
var path = require("path");
request = require('request-json');
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'))

// Dit is de route naar de home.
app.get('/', function(req, res) {
  res.render("index", {});
});

app.get('/home', function(req, res) {
    res.render("home", {});
});

app.get('/aanmelden', function(req, res) {
    res.render("home", {});
});

app.get('/registreren', function(req, res) {
    res.render("home", {});
});

app.get('/halte', function(req, res) {
    res.render("home", {});
});

app.get('/instellingen', function(req, res) {
    res.render("home", {});
});

app.get('/routeDetail', function(req, res) {
    res.render("home", {});
});

app.get('/routePlanner', function(req, res) {
    res.render("home", {});
});

app.get('/routeTijden', function(req, res) {
    res.render("home", {});
});

app.get('/ticket', function(req, res) {
    res.render("home", {});
});



// de server starten op poort 3000
app.listen(3000);
