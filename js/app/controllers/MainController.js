function MainController($scope) {
  $scope.name = 'Joe';
}

angular
  .module('app')
  .controller('MainController', MainController)
