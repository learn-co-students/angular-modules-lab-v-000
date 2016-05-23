  function MainController($scope) {
    $scope.name = 'Lucas';
  }

  angular
  .module('app')
  .controller('MainController', MainController)