function MainController($scope){
  $scope.name = "Kirsten";
}

angular
  .module('app', ['ngRoute'])
  .controller('MainController', MainController);
