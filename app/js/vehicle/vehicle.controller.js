;(function () {

  'use strict';

  angular.module('Vehicles')

  .controller('Vehicle', ['$scope', '$location', 'VehicleService',

    function($scope, $location, VehicleService) {
      // Add vehicle method
      $scope.addVehicle = function(x) {
        VehicleService.addCar(x).success(function() {
          // Re-route to home upon submission
          $location.path('/');
          // Clear form
          $scope.car = {};
        });
      };
    }

  ]);

}());
