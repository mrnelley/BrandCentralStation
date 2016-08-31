//********************DEPENDENCY INJECTION******************

var user = require("../data/users");
var fs   = require("fs-extra");
var path = require("path");
// (function(){
//     angular
//     .module("BrandCentral")
//     .controller("profileController", [])
//
//
// })();
module.exports.updatePhoto = function(req, res){
  var file = req.files.file;
  var userId = req.body.userId;
  console.log("User " + userId + " uploading ", file);
}
