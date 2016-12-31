function MainController($scope) {
  $scope.name = 'Brandon!';
}

angular
  .module('app')
  .controller('MainController', MainController);
