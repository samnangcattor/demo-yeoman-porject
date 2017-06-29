'use strict';

/**
 * @ngdoc overview
 * @name demoYeomanProjectApp
 * @description
 * # demoYeomanProjectApp
 *
 * Main module of the application.
 */
angular
  .module('demoYeomanProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$locationProvider', '$stateProvider',
    function ($urlRouterProvider, $locationProvider, $stateProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        });
    }
]);
