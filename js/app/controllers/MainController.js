function MainController($scope) {
  $scope.name = 'Jesse';
}

angular
  .module('app')
  .controller('MainController', MainController);