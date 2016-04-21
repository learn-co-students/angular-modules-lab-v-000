function MainController($scope) {
	$scope.name = "Brett";
} 

angular
	.module('app')
	.controller('MainController', MainController)