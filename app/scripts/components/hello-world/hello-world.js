'use strict';

/**
 * @ngdoc component
 * @name demoYeomanProjectApp.component:helloWorld
 * @description
 * # helloWorld
 */
angular.module('demoYeomanProjectApp')
  .component('helloWorld', {
    templateUrl: 'scripts/components/hello-world/hello-world.html',
    controller: 'helloWorldCtrl'
  })
  .controller('helloWorldCtrl', [
    function() {
      var $ctrl = this;
      $ctrl.title = 'Hello World';
    }
  ]);
