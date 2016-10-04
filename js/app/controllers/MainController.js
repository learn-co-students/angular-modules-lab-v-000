function MainController($scope) {
  $scope.name = "Saul!!!"
}

angular
  .module('app')
  .controller('MainController', MainController);
