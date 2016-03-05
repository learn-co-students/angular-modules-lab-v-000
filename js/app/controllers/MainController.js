function MainController($scope) {
  $scope.name = 'Dylan';
}

angular
    .module('app')
    .controller('MainController', MainController);