function MainController($scope) {
  $scope.name = 'David';
}

angular
  .module('app')
  .controller('MainController', MainController);
