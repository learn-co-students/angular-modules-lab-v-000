function MainController($scope) {
  $scope.name = 'Mr.NoEgo!';
}

angular
  .module('app')
  .controller('MainController', MainController);
