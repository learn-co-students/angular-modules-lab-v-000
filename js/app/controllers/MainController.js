function MainController($scope) {
  $scope.name = "Eric Loos";
}

angular
  .module('app')
  .controller('MainController', MainController);