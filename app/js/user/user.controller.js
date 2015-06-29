;(function () {

  'use strict';
  angular.module('Vehicles')

  .controller('UserController', ['$scope', 'UserService',

    function($scope, UserService) {

      $scope.registerUser = function(user) {
        UserService.register(user);
      }

    }

  ]);

}());
