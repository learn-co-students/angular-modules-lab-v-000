function MainController($scope) {
  $scope.name = "bob";
}

angular
  .module('app') // fetch the module
  .controller('MainController', MainController); // create the controller