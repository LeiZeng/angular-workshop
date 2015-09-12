'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function myInput() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    },
    template: '<input type="text"/>'
  };

}

directivesModule.directive('myInput', myInput)
