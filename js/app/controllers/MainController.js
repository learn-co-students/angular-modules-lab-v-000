function MainController($scope) {
  $scope.name = 'Jaclyn';
}


angular
  .module('app')
  .controller('MainController', MainController)