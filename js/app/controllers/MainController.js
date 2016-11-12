function MainController($scope) {
  $scope.name = 'Kerry';
}

angular
  .module('app')
  .controller('MainController', MainController);