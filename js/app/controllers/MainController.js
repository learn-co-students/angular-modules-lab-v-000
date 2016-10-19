function MainController($scope) {
  $scope.name = 'Peter';
}

angular
  .module('app')
  .controller('MainController', MainController);
