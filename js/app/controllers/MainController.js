function MainController($scope) {
  $scope.name = 'Hilary';
}

angular
  .module('app')
  .controller('MainController', MainController);
