(function(){
  angular
  .module("BrandCentral", [
                          "ui.router"
                                      ])
  .config(["$stateProvider", function($stateProvider){
                   $stateProvider
                    .state("signUp", {
                      url        : "/signup",
                      templateUrl: "./signUp/signUp.html",
                      controller : "signUpController"
                    })
                  }])
})();
