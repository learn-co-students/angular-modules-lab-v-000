function MainController($scope) {
	$scope.name = 'brad';
}

var module = angular.module('app'); 
module.controller('MainController', MainController); 