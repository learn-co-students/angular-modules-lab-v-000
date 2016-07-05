function MainController($scope) {
  $scope.name = "Olli";
}



angular
  .module('app')
  .controller('MainController', MainController);
