function MainController($scope){
  $scope.name='Taiwei';
}

angular
  .module('app')
  .controller('MainController', MainController);