(function() {

  'use strict';

  angular
    .module('studyApp')
    .service('crudService', crudService);

    crudService.$inject = ['$http'];

    function crudService($http) {
      return {
        getAll: function(resource) {
          return $http.get('/api/' + resource)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          })
        },
        getOne: function(id) {
          return $http.get('/api/decks/' + id)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          })
        },
        addNew: function(resource, payload) {
          return $http.post('/api/' + resource, payload)
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          })
        },
        update: function(id, updates) {
          return $http.put('/api/' + id, updates)
        }
      }
    }

})();