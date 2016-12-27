function MainController($scope) {
  $scope.name = "Mike";
}

angular
  .module('app') // fetch the module
  .controller('MainController', MainController);
