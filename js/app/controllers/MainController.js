function MainController($scope) {
  $scope.name = "Enoch";
}

angular
  .module('app')
  .controller('MainController', MainController)
