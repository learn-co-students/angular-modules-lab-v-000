
function MainController($scope) {
  $scope.name = 'Shana';
}

angular
  .module('app')
  .controller('MainController', MainController);