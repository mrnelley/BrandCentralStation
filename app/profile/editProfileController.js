(function(){
    angular
    .module("BrandCentral")
    .controller("editProfileController", [
                                          "Upload",
                                          "$scope",
                                          "$state",
                                          "$http",
                                          editProfileControllerFunction
                                        ]);
    function editProfileControllerFunction(Upload, $scope, $state, $http){
      //we are starting to get a lot of dependencies here -____-

      //add function for actually uploading photo :)
      //then we should officially have a single model CRU app with a nested property
      //ummmm i think I need to define a user lol

      $scope.user = JSON.parse(localStorage["UserData"]) || undefined;
      //UserData defined in navigationController
      //either its gonna be there or its not... but in order to not get an error,
      //might as well run this in either case
      $scope.$watch(function(){
        return $scope.file
      },function(){
      $scope.upload($scope.file);
        });
        //lets actually define this $scope.upload thing
        //I think this is something like Upload.upload? thats annoying
      $scope.upload = function(file){
        if(file){
          // console.log($scope.user);
                 Upload.upload({
                   url   :'api/profile/editPhoto',
                   method:'POST',//'post'//does this have to be all caps?
                   data  : {userId: $scope.user.id},
                   file  : file //this entire uploaded object really doesnt mean much
                                //without the file that we are passing in sooo..here it is
                 }).progress(function(evt){
                   console.log("working on it");//just some cool ng-upload stuff.
                 }).error(function(error){
                   console.log("error out");
                 });
               }
             };
//********************FUNCTION WRITING SKILLS ABOUT TO GET REAL******************
      $scope.updateUsername = function(){
        var request = {
            userId  : $scope.user.id,
            username: $scope.user.username
        }
        $http.post('api/profile/updateUsername', request)
        .success(function(){ console.log("successful"); })
        .error(function(err){console.log("error");})
      }

      $scope.updateBio     = function(){
        var request = {
          userId   : $scope.user.id,
          bio      : $scope.user.bio
        }
        $http.post('api/profile/updateBio', request)
        .success(function(){ console.log("successful");})
        .error(function(err){console.log("error");})
      }



  }
})();

//**************JUNKYARD CODE****************
//APPARENTLY THESE THINGS DONT F'ING WORK
//  }).succcess(function(data){
//  console.log("finished");
//  console.log(error);
// else(){
//          console.log("this didnt work");
//        }
