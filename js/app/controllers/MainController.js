function MainController($scope) {
  $scope.name = 'Tyson'
}

angular
  .module('app')
  .controller('MainController', MainController)
