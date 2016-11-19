function MainController($scope) {
  $scope.name = 'Traci';  
}

angular
  .module('app')
  .controller('MainController', MainController);
