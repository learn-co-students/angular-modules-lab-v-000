function MainController($scope){
  $scope.name = "Jake";
}

var app = angular.module('app');

app.controller('MainController',MainController);
