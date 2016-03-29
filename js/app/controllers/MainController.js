function MainController($scope){
  $scope.name = 'Danny';
}

angular
  .module('app')
  .controller('MainController', MainController);