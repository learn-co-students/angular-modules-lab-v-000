function MainController($scope) {
	$scope.name = 'Bill';
}

angular
	.module('app')
	.controller('MainController', MainController);
