var mongoose = require("mongoose")

var User = require("../data/users")

module.exports.signUp = function(req,res){
  // console.log(req.body);
  var user = new User(req.body);
  user.save();

  res.json(req.body);
}

module.exports.login = function(req, res){
  User.find(req.body, function(err, results){
    if(err){
      console.log("error out");
      console.log(err);
    }
    //i dont wanna see the function quietly succeed...hmmm
    if(results && results.length == 1){
      // res.json(req.body.email)
      // maybe respond with the user sign in req email?
      // maybe not... maybe we want to acturally do something
      var userData = results[0];
      res.json({
                email: req.body.email,
                id   : userData._id
              })
    }
  })
}
