function MainController($scope) {
  $scope.name = "Yechiel"
}

angular
  .module('app')
  .controller('MainController', MainController)
