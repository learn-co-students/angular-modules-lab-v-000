function MainController ($scope) {
  $scope.name = 'Andy';
}

angular
  .module('app', ['ngRoute'])
  .controller('MainController', MainController);