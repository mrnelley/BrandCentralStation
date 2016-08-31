//Because what would a single page application be without a decent nav bar?
(function(){
  angular
  .module("BrandCentral")
  .controller("NavigationController", [
                                        '$scope',
                                        '$state',
                                        '$http',
                                        NavigationControllerFunction
                                      ]);
  function NavigationControllerFunction($scope, $state, $http){
    console.log("im in the navigation controller");

    $scope.Userlogin = (function(){
                        $http.post('api/user/login', $scope.login)

                        //On success, lets set this equal to some object in local storage to confirm login
                        //because you know theres like no application at this point
                        //annoying, I think local storage cant take the raw JSON response
                        .success(function(response){
                          localStorage.setItem('UserData', JSON.stringify(response));
                          })
                        .error(function(error){
                          console.log(error);
                          })
                          })
  }

})();
