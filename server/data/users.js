var mongoose = require('mongoose');

var user     = mongoose.model("User", {
    username : String,
    password : String,
    email    : String,
    gender   : String,
    profile  : String,
    social   {
      facebook : String,
      twitter  : String,
      linkedIn : String,
      instagram: String,
      github   : String
    }
});

module.exports = user;
