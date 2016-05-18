function MainController($scope){
  $scope.name = "Brian Holland";
}

angular
  .module('app')
  .controller('MainController', MainController);
