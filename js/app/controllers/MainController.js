function MainController($scope){
   $scope.name = "Bob";
 }


angular
  .module('app')
  .controller('MainController', MainController);
