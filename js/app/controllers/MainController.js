function MainController($scope) {
  $scope.name = "Nathaniel Miller";
}

angular
  .module('app')
  .controller('MainController', MainController);
