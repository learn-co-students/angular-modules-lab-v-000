function MainController($scope){
  $scope.name = "Justin Thomas";
}

angular
  .module('app')
  .controller('MainController', MainController);
  