var express = require("express");
var path = require("path");
request = require('request-json');
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render("index", {});
});

app.get('/home', function(req, res) {
    res.render("home", {});
});

app.get('/aanmelden', function(req, res) {
    res.render("aanmelden", {});
});

app.get('/registreren', function(req, res) {
    res.render("registreren", {});
});

app.get('/halte', function(req, res) {
    res.render("halte", {});
});

app.get('/halteLijst', function(req, res) {
    res.render("halteLijst", {});
});

app.get('/instellingen', function(req, res) {
    res.render("instellingen", {});
});

app.get('/routeDetail', function(req, res) {
    res.render("routeDetail", {});
});

app.get('/routePlanner', function(req, res) {
    res.render("routePlanner", {});
});

app.get('/routeTijden', function(req, res) {
    res.render("routeTijden", {});
});

app.get('/ticket', function(req, res) {
    res.render("ticket", {});
});


app.listen(3000);
