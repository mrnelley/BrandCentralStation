//*****************NPM DEPENDENCY INJECTION******************
var express    = require("express");
var mongoose   = require("mongoose");
var hbs        = require("hbs");
var bodyParser = require("body-parser");
var multipart  = require("connect-multiparty");

var multipartMiddleware = multipart();

var app        = express();


//***************DEFINING BACK-END CONTROLLERS***************
var authenticationController = require("./server/controllers/authenticationController")
var profileController        = require("./server/controllers/profileController")

//*****************CONNECT TO LOCAL DATABSE******************
mongoose.connect('mongodb://localhost/brand-central-station')

app.use("/app", express.static(__dirname + "/app"))
// having to require node_modules for application use because bootstrap npm install and others
app.use("/node_modules", express.static(__dirname + "/node_modules"))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(multipartMiddleware)

app.set("view engine", "hbs");
app.listen(4000, function(){
          console.log("listening on port 4000");
          })


//*********************AUTHENTICATION***********************
app.post("/api/user/signUp", authenticationController.signUp);
app.post("/api/user/login", authenticationController.login);

//************************PROFILE***************************
app.post("/api/profile/editPhoto", multipartMiddleware, profileController.updatePhoto);
//using mutipart to parse into json

//*********************ROUTE TESTING************************

app.get("/", function(req, res){
  res.render("index.hbs", {})
})
