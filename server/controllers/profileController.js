//********************DEPENDENCY INJECTION******************

var user = require("../data/users");
var fs   = require("fs-extra");
var path = require("path");
var mv   = require('mv');

module.exports.updatePhoto = function(req, res){
  var file   = req.files.file;
  var userId = req.body.userId;
  console.log("User " + userId + " uploading ", file);
  //HALLALUJAH... this finally worked and returned the userID and file as rendered from fs

  var uploadDate = new Date().toISOString;

  console.log(uploadDate);
      // uploadDate = uploadDate.replace(".","");
      // uploadDate = uploadDate.replace("-","");
      // uploadDate = uploadDate.replace(":","");
      //kinda just want the basic stuff... not interested in these extra characters that it returns
  var tempPath   = file.path;
  var targetPath = path.join(__dirname, "../../uploads/"+ userId + file.name);
  //this is like SUPER UNIQUE so that we can properly map all this data thats gonna be created
  //cuz ya know... im planning on having 30,000 users like tomorrow
  mv(tempPath, targetPath, function(err){
    if(err){
      console.log(err);
      }
    else{
      console.log("file moved");
      }
  })
  //so i tried to do this with fs.rename at first but apparently Ubuntu doesnt like that
  //this has something to do with a separate tmp partition being made in the operating system and
  //so you cannot rename and allocate files accross partitions... mv does something to fix that.
  
}
