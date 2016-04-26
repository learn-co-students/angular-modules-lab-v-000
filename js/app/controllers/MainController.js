function MainController($scope){
  $scope.name = 'Brian';
}

angular
  .module('app')
  .controller('MainController', MainController);