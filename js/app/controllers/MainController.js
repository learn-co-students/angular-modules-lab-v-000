function MainController($scope) {
  $scope.name = 'Michael';
}

angular
  .module('app')
  .controller('MainController', MainController);
