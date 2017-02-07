function MainController($scope) {
  $scope.name = 'Namely Name'  
}

angular
    .module('app')
    .controller('MainController', MainController);