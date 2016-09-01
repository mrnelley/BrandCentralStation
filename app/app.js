"use strict";

(function(){
  angular
  .module("BrandCentral", [
                          "ui.router",
                          "ngFileUpload"
                                      ])
  .config(["$stateProvider", Router]);
         function Router($stateProvider){
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
                    });
                  }
})();
