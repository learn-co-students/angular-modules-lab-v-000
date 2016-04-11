function MainController($scope) {
	$scope.name = 'Edgar';
}

angular
	.module('app')
	.controller('MainController', MainController);