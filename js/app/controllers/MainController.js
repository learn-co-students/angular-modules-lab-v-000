function MainController($scope){
  $scope.name = "Kirsten";
}

angular
  .module('app')
  .controller('MainController', MainController);
