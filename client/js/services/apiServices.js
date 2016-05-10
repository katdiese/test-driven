(function() {

  'use strict';

  angular
    .module('studyApp')
    .service('apiService', apiService);

  apiService.$inject = ['$http', 'crudService'];

  function apiService($http, crudService) {

  }

})();