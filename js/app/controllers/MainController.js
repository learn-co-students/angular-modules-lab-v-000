function MainController($scope) {
  $scope.name = 'Luke';
}

angular
  .module('app')
  .controller('MainController', MainController);
