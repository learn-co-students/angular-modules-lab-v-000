function MainController($scope) {
  $scope.name = 'Jason';
}
angular
  .module('app')
  .controller('MainController', MainController);