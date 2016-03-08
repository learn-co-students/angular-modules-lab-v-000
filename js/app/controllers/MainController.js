function MainController($scope) {
  $scope.name = "This lab's quality is questionable."
}

angular
  .modular('app')
  .controller('MainController', MainController);
