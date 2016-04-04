function MainController($scope){
  $scope.name = 'Lisa';
}

angular
  .module('app')
  .controller('MainController', MainController);