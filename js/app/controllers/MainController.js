function MainController($scope) {
  $scope.name = "Josh";
}

angular
  .module('app')
  .controller('MainController', MainController)
