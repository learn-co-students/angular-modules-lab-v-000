function MainController($scope) {
  $scope.name = 'kris';

}
angular
  .module('app')
  .controller('MainController', MainController);