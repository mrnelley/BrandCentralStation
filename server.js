//*****************NPM DEPENDENCY INJECTION******************
var express    = require("express")
var mongoose   = require("mongoose")
var bodyParser = require("body-parser")

var app        = express();
app.listen(4000, function(){
  console.log("listening on port 4000");
})
