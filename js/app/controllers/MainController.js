function MainController($scope) {
  $scope.name = "Araf";
}

angular
      .module('app',[])
      .controller('MainController', MainController);
