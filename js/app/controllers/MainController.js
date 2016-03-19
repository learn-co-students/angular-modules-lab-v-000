function MainController($scope) {
  $scope.name = 'Kevin'
}

angular
	.module('app')
	.controller('MainController', MainController);
