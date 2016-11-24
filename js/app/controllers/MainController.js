function MainController($scope) {
	$scope.name = 'Cthulhu';
}

angular
	.module('app')
	.controller('MainController', MainController);