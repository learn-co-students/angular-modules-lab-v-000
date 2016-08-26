function MainController($scope) {
  $scope.name = 'natasha';
}

angular
  .module('app')
  .controller('MainController', MainController);
