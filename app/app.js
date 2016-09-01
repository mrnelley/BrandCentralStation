"use strict";

(function(){
  angular
  .module("BrandCentral", [
                          "ui.router",
                          "ngFileUpload"
                                      ])
  .config(["$stateProvider", "$urlRouterProvider", Router]);
         function Router($stateProvider, $urlRouterProvider){

                   $urlRouterProvider.otherwise("/")
                   //if none of the states provided below are called in the URL then
                   // redirect all other to the route defined above.

                   $stateProvider
                    .state("signUp", {
                      url        : "/signup",
                      templateUrl: "app/signUp/signUp.html",
                      controller : "signUpController"
                    })
                    .state("editProfile", {
                      url        : "/editProfile",
                      templateUrl: "app/profile/editProfile.html",
                      controller : "editProfileController"
                    })
                    .state("main", {
                      url        :"/",
                      templateUrl:"app/main/main.html",
                      controller :"mainController"
                    });
                    //I figured it might be good to maybe start showing
                    //something on the main page lol
                  }
})();
