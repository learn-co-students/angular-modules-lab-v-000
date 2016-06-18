function MainController($scope) {
  $scope.name = "Katherine"
}

angular 
  .module('app')
  .controller('MainController', MainController)