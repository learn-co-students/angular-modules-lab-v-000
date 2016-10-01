function MainController($scope){
	$scope.name = 'Parker';
}

angular
  .module('app')
  .controller('MainController', MainController)