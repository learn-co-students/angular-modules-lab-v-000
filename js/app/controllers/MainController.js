function MainController($scope) {
	$scope.name = "Jonathan";
}

angular
	.module('app')
	.controller('MainController', MainController)

