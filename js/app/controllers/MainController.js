function MainController($scope){
  $scope.name = "Steve Jobs!";
}

angular
  .module('app')
  .controller('MainController', MainController);
