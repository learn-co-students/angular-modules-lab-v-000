function MainController($scope) {
	$scope.name = "cool";
}

angular
	.module('app')
	.controller('MainController', MainController);

