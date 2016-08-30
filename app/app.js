"use strict";

(function(){
  angular
  .module("BrandCentral", [
                          "ui.router"
                                      ])
  .config(["$stateProvider", Router]);
         function Router($stateProvider){
                   $stateProvider
                    .state("signUp", {
                      url        : "/signup",
                      templateUrl: "app/signUp/signUp.html",
                      controller : "signUpController"
                    });
                  }
})();
