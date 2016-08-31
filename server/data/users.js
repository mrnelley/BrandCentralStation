var mongoose = require('mongoose');

var user     = mongoose.model("User", {
    email    : String,
    password : String,
    username : String,
    image    : String,
    bio      : String,
    firstname: String,
    lastname : String,
    gender   : String,
    profile  : String,
    social   :{
      facebook : String,
      twitter  : String,
      linkedIn : String,
      instagram: String,
      github   : String
    }
});

module.exports = user
