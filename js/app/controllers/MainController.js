function MainController(){
  $scope.name = "Jason!";
}

angular
  .module('app')
  .controller('MainController', MainController);