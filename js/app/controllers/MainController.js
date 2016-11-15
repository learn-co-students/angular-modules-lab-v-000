function MainController($scope) {
  $scope.name = "Pentti";
}

angular
    .module('app')
    .controller('MainController', MainController);
