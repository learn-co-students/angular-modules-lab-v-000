function MainController($scope){
  $scope.name = 'James';
}

angular
  .module('app')
  .controller('MainController', MainController)