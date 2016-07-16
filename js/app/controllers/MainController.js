angular
  .module('app')
  .controller('MainController', MainController);

function MainController($scope) {
  $scope.name = 'Ryan'
}
