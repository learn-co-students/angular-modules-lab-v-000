function MainController($scope){
  $scope.name = 'Vince!';  
}

var app = angular.module('app');

app.controller('MainController', MainController);
