function MainController($scope) {
  $scope.name = 'DEEZ CODES';
  
}

angular
.module('app')
.controller('MainController', MainController)
.route('ngroute')