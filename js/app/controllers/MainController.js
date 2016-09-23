function MainController($scope) {
  $scope.name = 'Adriancho';
}

angular
  .module('app')
  .controller('MainController', MainController)
