function MainController($scope) {
  $scope.name = 'Dereje!';
}

angular
  .module('app')
  .controller('MainController', MainController);
