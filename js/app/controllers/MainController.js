function MainController($scope) {
  $scope.name = 'Will';
}

angular
.module('app')
.controller('MainController', MainController);
