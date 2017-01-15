function MainController($scope) {
  $scope.name = 'Ann';
}

angular
  .module('app')
  .controller('MainController', MainController);