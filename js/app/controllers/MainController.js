function MainController($scope) {
  $scope.name = "Lenn";
}

angular
      .module('app',[])
      .controller('MainController', MainController);
