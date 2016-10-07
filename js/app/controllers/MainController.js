function MainController($scope) {
  $scope.name = 'Pedro!';
}

angular
  .module('app')
  .controller('MainController', MainController);