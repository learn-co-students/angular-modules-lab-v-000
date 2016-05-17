function MainController($scope) {
  $scope.name = "Rachel";
}

angular
  .module('app')
  .controller('MainController', MainController)