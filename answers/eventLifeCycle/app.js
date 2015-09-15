(function(angular) {
  'use strict';
  var myApp = angular.module('myApp', []);

  myApp.controller('Greeting', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.title = "Hello";
    $scope.name = 'World';

    $scope.action = function() {
      setTimeout(function () {
        $scope.title = 'Click'
        $scope.$apply(function () {
          alert('applied!')
        })
      }, 500)
    };
  }]);
})(window.angular);
