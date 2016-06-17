function MainController($scope) {
	$scope.name = "ken";
}

angular
	.module('app')
	.controller('MainController', MainController);
