function MainController($scope) {
  $scope.name = 'Mike'
}

angular
  .module('app')
  .controller('MainController', MainController)
