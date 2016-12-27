function MainController($scope) {
  $scope.name = "Mike";
}

angular
  .module('app', ['ngRoute']) // fetch the module
  .controller('MainController', MainController);
