function MainController($scope) {
	$scope.name = 'David';
}

angular
  .module('app') // fetch the module
  .controller('MainController', MainController); // create the controller