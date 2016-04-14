function MainController($scope) {
  $scope.name = "Zach";
}

angular
  .module('app');
  .controller('MainController', MainController);