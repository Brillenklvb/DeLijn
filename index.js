var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static('public'))

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/routePlanner", function(req, res) {
  res.render("routePlanner");
});

app.get("/routeTijden", function(req, res) {
  res.render("routeTijden");
});

app.get("/routeDetail", function(req, res) {
  res.render("routeDetail");
});


// de server starten op poort 3000
app.listen(3000);
