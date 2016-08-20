function MainController($scope) {
  $scope.name = 'Cory!';
}


angular
  .module('app')
  .controller('MainController', MainController);
