'use strict';

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'sass': {
    'src' : 'app/styles/**/*.scss',
    'dest': 'build/css',
    'prodSourcemap' : false
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/js'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./app/js/main.js'],
    'bundleName': 'main.js',
    'prodSourcemap' : false
  },

  'exercises': {
    'root'  : 'answers'
  },

  'watch': ['answers/**/*.js', 'answers/**/*.html'],

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
