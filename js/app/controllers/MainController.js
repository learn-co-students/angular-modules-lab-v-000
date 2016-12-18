function MainController($scope) {
  $scope.name = 'Han';
}


angular
  .module('app')
  .controller('MainController', MainController);
