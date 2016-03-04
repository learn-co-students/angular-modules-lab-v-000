function MainController($scope) {
  $scope.name = 'Aaron';
}

var module = angular.module('app');

module.controller('MainController', MainController);