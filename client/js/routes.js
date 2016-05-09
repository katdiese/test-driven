(function() {

  'use strict';

  angular
    .module('studyApp')
    .config(appConfig)
    .run(routeChange)

  appConfig.$inject = ['$routeProvider', '$httpProvider'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      template: '<h1>Hello!!!!</h1>'
    })
  }


})();