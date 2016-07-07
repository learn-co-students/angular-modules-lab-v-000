function MainController($scope){
  $scope.name = 'Person'
};

angular
  .module('app')
  .controller('MainController', MainController);