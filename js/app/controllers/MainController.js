function MainController($scope) {
  $scope.name = "Sean";
}

angular
  .module('app')
  .controller('MainController', MainController);
