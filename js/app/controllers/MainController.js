function MainController($scope) {
  $scope.name = 'mike';
}

angular
  .module('app')
  .controller('MainController', MainController);
