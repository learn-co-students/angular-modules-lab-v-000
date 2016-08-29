function MainController($scope) {
  $scope.name = 'Antonio';  
}

// attach controller to existing module 'app'
angular
  .module('app') //fetch the module
  .controller('MainController', MainController); //create the controller