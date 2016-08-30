(function(){
  angular
  .module("BrandCentral")
  .controller("signUpController", [
                                    '$scope',
                                    '$state',
                                    signUpControllerFunction
                                  ]);
  function signUpControllerFunction($scope, $state){
    console.log("im in the controller");
  // 'signUpControllerFunction'
  }

})();
