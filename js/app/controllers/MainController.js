function MainController($scope) {
  $scope.name = "Scotty";
}

angular
  .module('app')
  .controller('MainController', MainController);
