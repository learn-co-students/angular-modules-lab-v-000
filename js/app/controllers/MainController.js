function MainController($scope) {
  $scope.name = "John";
}

angular
  .module('app')
  .controller('MainController', MainController)
