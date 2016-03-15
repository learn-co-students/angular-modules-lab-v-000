function MainController($scope){
  $scope.name = 'jake';
}

angular
  .module('app')
  .controller('MainController', MainController);