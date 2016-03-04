function MainController($scope) {
  $scope.name = 'Brigan';
}

var module = angular.module('app');

module.controller('MainController', MainController)