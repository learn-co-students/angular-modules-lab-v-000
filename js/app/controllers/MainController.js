function MainController($scope) {
  $scope.name = 'Saron';
}

angular
  .module('app')
  .controller('MainController', MainController);
