
function MainController($scope, $filter) {
  
  $scope.handle = '';

  $scope.lowercasehandle = function() {
  	return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $scope.rules = [


  {rulename: "Must be 5 characters"},
  {rulename: "Must be not used elsewhere"},
  {rulename: "Must be cool"},

  ]
}

angular
  .module('app')
  .controller('MainController', MainController);