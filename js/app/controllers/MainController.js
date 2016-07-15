function MainController($scope){
  $scope.name = 'Tej'
}

angular
  .module('app')
  .controller('MainController', MainController);