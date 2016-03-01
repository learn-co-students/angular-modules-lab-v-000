function MainController($scope) {
  $scope.name = 'Sarah';
}

angular
  .module('app')
  .controller('MainController', MainController);
