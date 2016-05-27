function MainController($scope){
  $scope.name = "Evan Ng";
}

angular
  .module('app')
  .controller('MainController', MainController);
