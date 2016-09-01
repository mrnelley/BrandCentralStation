//********************DEPENDENCY INJECTION******************

var user = require("../data/users");
var fs   = require("fs-extra");
var path = require("path");
var mv   = require('mv');


//************************PHOTO UPDATE**********************
module.exports.updatePhoto = function(req, res){
  var file   = req.files.file;
  var userId = req.body.userId;
  console.log("User " + userId + " uploading ", file);
  //HALLALUJAH... this finally worked and returned the userId and file as rendered from fs

  var uploadDate = new Date();

  console.log(uploadDate);
      // uploadDate = uploadDate.replace(".","");
      // uploadDate = uploadDate.replace("-","");
      // uploadDate = uploadDate.replace(":","");
      //kinda just want the basic stuff... not interested in these extra characters that it returns
  var tempPath   = file.path;
  var targetPath = path.join(__dirname, "../../uploads/"+ userId + uploadDate + file.name);
  //this is like SUPER UNIQUE so that we can properly map all this data thats gonna be created
  //cuz ya know... im planning on having 30,000 users like tomorrow
  var savePath   = "/uploads/"+ userId + uploadDate + file.name;

  mv(tempPath, targetPath, function(err){
    if(err){
      console.log(err);
      }
    else{
      // console.log("file moved");
      user.findById(userId, function(err, userData){
        var user = userData;
        user.image = savePath;
        user.save(function(err){
          if(err){
            console.log("failed to save")
            res.json({status: 500});
          }
          else{
            console.log("Save Successful!")
            res.json({status: 200});
          }
        })
      })
      }
  })
  //so i tried to do this with fs.rename at first but apparently Ubuntu doesnt like that
  //this has something to do with a separate tmp partition being made in the operating system and
  //so you cannot rename and allocate files accross partitions... mv does something to fix that.

}

//*****************************UPDATE USERNAME FUNCTION*************************
module.exports.updateUsername = function(req, res){
  var username = req.body.username;
  var userId   = req.body.userId;

  user.findById(userId, function(err, userData){
    var user      = userData;
    user.username = username;

    user.save(function(err){
      if(err){
        console.log("failed");
        res.json({status: 500})
      }
      else{
        console.log("success");
        res.json({status: 200})
      }
    })
  })
};

//*****************************UPDATE BIO FUNCTION******************************
module.exports.updateBio = function(req, res){
  var bio      = req.body.bio;
  var userId   = req.body.userId;

  user.findById(userId, function(err, userData){
    var user      = userData;
    user.bio      = bio;

    user.save(function(err){
      if(err){
        console.log("failed");
        res.json({status: 500})
      }
      else{
        console.log("success");
        res.json({status: 200})
      }
    })
  })
};

//*************************************NOTES************************************
//at some point I do want to abstract the functionality of these functions so that there is a
//more organized list of module.exports.... but until that day.
