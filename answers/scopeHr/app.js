(function(angular) {
  'use strict';

  angular.module('myApp', [])
  .controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.title = "Hello";
    $scope.name = 'World';
  }])
  .controller('ListController', ['$scope', function($scope) {
    $scope.names = ['Boo', 'Foo', 'Duu']
    $scope.department = "Sydney"
    $scope.names.push($scope.name)
  }]);
})(window.angular);
