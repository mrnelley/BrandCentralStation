//*****************NPM DEPENDENCY INJECTION******************
var express    = require("express");
var mongoose   = require("mongoose");
var hbs        = require("hbs");
var bodyParser = require("body-parser");

var app        = express();

mongoose.connect('mongodb://localhost:27071/brand-central-station')

app.set("view engine", "hbs");
app.listen(4000, function(){
  console.log("listening on port 4000");
})

app.get("/", function(req, res){
  res.render("index.hbs", {})
})
