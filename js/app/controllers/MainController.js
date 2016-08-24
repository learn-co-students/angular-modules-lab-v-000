function MainController($scope) {
  $scope.name = "Sam";
}

angular
  .module('app')
    .controller('MainController', MainController);
