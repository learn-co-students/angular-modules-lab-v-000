function MainController($scope){
  $scope.name = 'Ryan';
}

angular
  .module('app')
  .controller('MainController', MainController);