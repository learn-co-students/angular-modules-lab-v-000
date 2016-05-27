function MainController($scope){
  $scope.name = "Aaron";

}


angular
  .module('app')
  .controller('MainController', MainController);

  var module = angular.module('app'); // fetch the module
module.controller('MainController', MainController); // create the controller
