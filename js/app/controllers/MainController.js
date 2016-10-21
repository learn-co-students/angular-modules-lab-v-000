function MainController($scope) {
  $scope.name = 'Shoko';
}

// We assume that the module "exampleModule" has already been created
angular
    .module('app') // fetch the module
    .controller('MainController', MainController); // create the controller
