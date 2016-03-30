function MainController($scope) {
  $scope.name = "Tucker";
}

angular
  .module('app')
  .controller('MainController', MainController);