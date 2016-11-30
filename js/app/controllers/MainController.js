function MainController($scope) {
  $scope.name = "Dom";
}

angular
  .module('app', [])
  .controller('MainController', MainController);
