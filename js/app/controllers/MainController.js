function MainController($scope){
  $scope.name = 'Avi'
}

angular
  .module('app')
  .controller('MainController', MainController)
