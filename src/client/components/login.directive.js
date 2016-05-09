(function() {

  'use strict';

  angular
    .module('studyApp')
    .directive('login', login);

    function login() {
      return {
        restrict: 'E',
        templateUrl: 'components/login.view.html',
        controller:
          function($scope) {
            $scope.showLogin = true;
            $scope.toggleLogin = function() {
              $scope.showLogin = !$scope.showLogin;
            }
          }
      }
    }

})();