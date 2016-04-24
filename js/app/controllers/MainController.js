function MainController($scope) {
  $scope.name = "Corey";
}
angular
  .module('app')
  .controller('MainController', MainController);