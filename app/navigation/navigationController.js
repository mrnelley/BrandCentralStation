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
    // console.log("im in the navigation controller");
    if(localStorage['UserData']){
      $scope.loggedIn = true;
    }
    else{
      $scope.loggedIn = false;
    }
    //I dont like this... i would rather create a factory that consistently
    //checks against local storage for User Data, but FOR NOW... ill do it here #time

    $scope.Userlogin = (function(){
                        $http.post('api/user/login', $scope.login)

                        //On success, lets set this equal to some object in local storage to confirm login
                        //because you know theres like no application at this point
                        //annoying, I think local storage cant take the raw JSON response
                        .success(function(response){
                          localStorage.setItem('UserData', JSON.stringify(response));
                          $scope.loggedIn = true;
                          })
                        .error(function(error){
                          console.log(error);
                          })
                          })
    $scope.logOut    = (function(){
                        localStorage.clear()
                        $scope.loggedIn = false;
    })
  }

})();
