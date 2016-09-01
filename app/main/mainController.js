"use strict";

(function(){
  angular
  .module("BrandCentral")
  .controller("mainController", [
                                "$scope",
                                "$http",
                                "$interval",
                                mainControllerFunction
                                        ]);
function mainControllerFunction($scope, $http, $interval){

if  (localStorage['UserData'] !== undefined){
  $scope.user = JSON.parse(localStorage['UserData'])
  console.log($scope.user);
}

$scope.sendMessage = function(){
  var request = {
    user   : $scope.user.username || $scope.user.email,
    userId : $scope.user.id,
    userimg: $scope.user.image,
    content: $scope.newMessage
  }
  $http.post('/api/message/post', request).success(function(response){
    console.log(response);
    $scope.messages = response;
  }).error(function(error){
    console.log(error);
  })
}


}




})();
