function MainController($scope, $http) {
  $scope.name = "Kyle"
}

angular
  .module('app')
  .controller('MainController', MainController);
