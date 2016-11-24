function MainController($scope){
  $scope.name = "Dom";
}

angular
  .module('app') // fetch the module
  .controller('MainController', MainController); // create the controller
