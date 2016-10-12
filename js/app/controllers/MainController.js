function MainController($scope) {
  $scope.name = "Jennifer";
}

angular
  .module('appModule')
  .controller('MainController', MainController);