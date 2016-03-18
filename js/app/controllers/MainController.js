function mainController($scope) {
	$scope.name = 'Mendel'
}

angular
	.module('app')
	.controller('MainController', mainController);