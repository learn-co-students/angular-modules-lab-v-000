function MainController($scope) {
  $scope.name = "Tyler";
}

angular
  .module('app')
  .controller('MainController', MainController);