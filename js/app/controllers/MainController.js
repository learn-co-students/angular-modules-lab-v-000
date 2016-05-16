function MainController($scope){
  $scope.name = "Seth"
}

angular
  .module('app')
  .controller('MainController', MainController)