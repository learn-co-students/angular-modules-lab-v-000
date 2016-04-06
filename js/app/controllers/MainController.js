function MainController($scope){
  $scope.name = "Alejandro";
}

angular
  .module('app');
  .controller('MainController', MainController);