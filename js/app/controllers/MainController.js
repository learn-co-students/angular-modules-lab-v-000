function MainController($scope) {
  $scope.name = 'JOE';
}

angular
  .module('app')
  .controller('MainController', MainController);
