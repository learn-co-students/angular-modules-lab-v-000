function MainController($scope) {
  $scope.name = "Karuna";
}

angular
  .module('app')
  .controller('MainController', MainController);
