(function(){
    angular
    .module("BrandCentral")
    .controller("editProfileController", [
                                          "$scope",
                                          "$state",
                                          "$http",
                                          "Upload",
                                          editProfileControllerFunction
                                          ])
    function editProfileControllerFunction($scope, $state, $http, Upload){
      //we are starting to get a lot of dependencies here -____-
    }

})();
