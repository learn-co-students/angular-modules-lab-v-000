function MainController($scope) {
  $scope.name = 'Kaileigh!';
}

angular
  .module('app')
  .controller('MainController', MainController);