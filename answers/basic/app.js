(function(angular) {
  'use strict';
  var myApp = angular.module('myApp', []);

  myApp.controller('Greeting', ['$scope', function($scope) {
    $scope.title = "Hello";
    $scope.name = 'World';

    $scope.action = function() {
      alert($scope.title)
    };
  }]);
})(window.angular);
