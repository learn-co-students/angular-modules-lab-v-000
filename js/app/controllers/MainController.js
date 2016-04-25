function MainController($scope){
  $scope.name = 'Nick'
}


angular
  .module("app")
  .controller("MainController", MainController)