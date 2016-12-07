function MainController($scope) {
  $scope.name = 'TyDell!';
}

angular
  .module('app')
  .controller('MainController', MainController);