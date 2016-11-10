function MainController($scope) {
  $scope.name = "Bernie"
}

angular
  .module('app', [])
  .controller('MainController', MainController);