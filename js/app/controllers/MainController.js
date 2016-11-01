function MainController($scope) {
   $scope.name = 'Mark!';
 }

 angular
   .module('app')
   .controller('MainController', MainController);
