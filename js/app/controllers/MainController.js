function MainController($scope) {
  $scope.name = "Zac";
}

angular
  .module('app')
  .controller('MainController', MainController);
