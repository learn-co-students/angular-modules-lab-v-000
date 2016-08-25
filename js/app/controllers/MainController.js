function MainController($scope) {
  $scope.name = "Alex";
}

angular
  .module('app')
  .controller('MainController', MainController);
