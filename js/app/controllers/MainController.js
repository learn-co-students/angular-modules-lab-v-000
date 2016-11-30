function MainController($scope) {
  $scope.name = "Karuna";
}

angular
  .module('app') // fetch the module
  .controller('MainController', MainController); // create the controller
