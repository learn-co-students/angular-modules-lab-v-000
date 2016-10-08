function MainController($scope) {
  $scope.name = 'Gabe';
}

angular
  .module('app')
  .controller('MainController', MainController);