function MainController($scope) {
  $scope.name = 'Callie';
}

angular
  .module('app') 
  .controller('MainController', MainController); 