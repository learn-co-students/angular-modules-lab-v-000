function MainController($scope){
  $scope.name = 'Don';
}

angular
  .module('app')
  .controller('MainController', MainController);