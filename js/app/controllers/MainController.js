function MainController($scope) {
  $scope.name = "Alice";
}

angular
       .module('app')
       .controller('MainController', MainController);
