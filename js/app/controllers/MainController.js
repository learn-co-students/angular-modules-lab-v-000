function MainController($scope) {
  $scope.name = 'Miranda';
}

angular
  .module('app')
  .controller('MainController', MainController)
