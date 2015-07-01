;(function () {

  'use strict';
  angular.module('Vehicles')

  .controller('UserController', ['$scope', 'UserService',

    function($scope, UserService) {

      $scope.registerUser = function(user) {
        UserService.register(user);
      };

      $scope.loginUser = function(user) {
        UserService.logIn(user);
      }

    }

  ]);

}());
