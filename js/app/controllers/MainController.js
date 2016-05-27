function MainController($scope) {
  $scope.name = 'Yianna you are awesome!';
}

angular
  .module('app')
  .controller('MainController', MainController);
