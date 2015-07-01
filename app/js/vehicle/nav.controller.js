;(function () {

  'use strict';
  angular.module('Vehicles')

  .controller('NavCtrl', ['$scope', '$rootScope', 'UserService',

    function($scope, $rootScope, UserService) {

      $rootScope.$on('PageChange', function(event, data) {
        // console.log('Page has changed to ' + data);
      });

      $scope.logout = function() {
        UserService.logOut();
      }
    }

  ]);

}());
