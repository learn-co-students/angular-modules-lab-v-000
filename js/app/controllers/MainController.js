function MainController($scope) {
  $scope.name = 'Frank';
}

angular
  .module('app')
  .controller('MainController', MainController);
