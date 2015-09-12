'use strict';

var directivesModule = require('./_index.js');

/**
 * @ngInject
 */
function myClickableButton() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    }
  };

}

directivesModule.directive('myClickableButton', myClickableButton)
