var mongoose = require("mongoose")

var User = require("../data/users")

module.exports.signUp = function(req,res){
  // console.log(req.body);
  var user = new User(req.body);
  user.save();

  res.json(req.body);
}
