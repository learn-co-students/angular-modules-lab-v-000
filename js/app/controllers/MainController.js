function MainController($scope){
  $scope.name = "Ashley";
}

//var module = angular.module('app');
//module.controller = ("MainController", MainController);

angular
  .module('app')
  .controller("MainController", MainController);