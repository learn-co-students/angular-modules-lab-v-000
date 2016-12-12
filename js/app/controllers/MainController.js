function MainController($scope) {
  $scope.name = 'Christian';
}



angular
  .module('app')
  .controller('MainController', MainController);
