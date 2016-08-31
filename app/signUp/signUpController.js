(function(){
  angular
  .module("BrandCentral")
  .controller("signUpController", [
                                    '$scope',
                                    '$state',
                                    '$http',
                                    signUpControllerFunction
                                  ]);
  function signUpControllerFunction($scope, $state, $http){
    console.log("im in the signUpcontroller");

    $scope.createUser = function(){
                        console.log($scope.newUser);
                        $http.post('api/user/signUp', $scope.newUser)
                             .success(function(response){})
                             .error(function(error){
                               console.log(error);
                             })
  //praying that i dont break my code. lol
                        }
    }

})();
