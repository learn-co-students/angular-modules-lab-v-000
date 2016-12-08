function MainController($scope) {
  $scope.name = "Bobo";
}

angular
  .module('app')
  .controller('MainController', MainController)
