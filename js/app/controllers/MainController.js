function MainController($scope) {
  $scope.name ="I am Marco!"
}

angular
  .module('app')
  .controller('MainController', MainController);
