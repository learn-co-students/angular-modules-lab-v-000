function MainController($scope){
  $scope.name = "Eric";
}

angular
  .module('app')
  .controller("MainController", MainController);
