function MainController($scope) {
	$scope.name = 'Robert';
}

angular
	.module('app')
	.controller('MainController', MainController);
