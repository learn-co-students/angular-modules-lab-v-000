function MainController($scope) {
  $scope.name = "Enter your name here!"
}

angular
  .module('app')
  .controller('MainController', MainController);
