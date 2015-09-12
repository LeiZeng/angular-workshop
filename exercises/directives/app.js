(function(angular) {
  'use strict';
  var myApp = angular.module('myApp', []);

  myApp
  .controller('Greeting', function($scope) {
    $scope.title = 'Hello'
    $scope.name = 'World'
    $scope.action = function () {
    }
  })
  .directive('myTitle', function() {
    // TODO

  })
  .directive('myButton', function() {
    // TODO

  })
  .directive('myScope', function() {
    // TODO

  });

})(window.angular);
