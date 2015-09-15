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
    return {
      restrict: 'A',
      template: '{{title}} {{name}}'
    };
  })
  .directive('myButton', function() {
    return {
      restrict: 'E',
      link: function (scope, element) {
        element.on('click', function (e) {
          alert('this is a button with scope: ' + scope.name)
        })
      }
    }
  })
  .directive('myScope', function() {
    return {
      restrict: 'E',
      scope: {
        key: '='
      },
      link: function (scope, element) {
        alert('I got key:' + scope.key)
      }
    }
  });

})(window.angular);
