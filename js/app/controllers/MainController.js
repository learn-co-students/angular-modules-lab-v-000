function MainController($scope){
  $scope.name = 'Cody';
}

angular
  .module('app')
  .controller('MainController',MainController);
