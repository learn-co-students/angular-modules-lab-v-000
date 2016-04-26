function MainController($scope) {
  $scope.name = 'Matt'
}

angular
  .module('app')
  .controller('MainController', MainController)