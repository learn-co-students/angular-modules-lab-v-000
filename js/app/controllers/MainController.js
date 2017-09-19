function MainController($scope) {
  $scope.name = "Spiderman";
}

angular
  .module('app')
  .controller('MainController', MainController);
