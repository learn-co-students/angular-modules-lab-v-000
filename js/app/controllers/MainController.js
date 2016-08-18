function MainController($scope){
  $scope.name = 'Savannah';
}

angular
  .module('app')
  .controller('MainController', MainController);
