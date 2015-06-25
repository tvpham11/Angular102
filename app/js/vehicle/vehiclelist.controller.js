;(function () {

  'use strict';

  angular.module('Vehicles')

  .controller('VehicleList', ['$scope', 'VehicleService', '$rootScope',
    function($scope, VehicleService, $rootScope) {

      // Call method to retrieve all vehicles
      VehicleService.getCars();

      $rootScope.$on('AllCarsRetrieved', function(event, data) {
        $scope.vehicleList = data.results;
      });

      $scope.deleteMe = function(whichOne) {

        VehicleService.deleteCar(whichOne).success(function() {
          $scope.vehicleList = _.without($scope.vehicleList, whichOne);
        });
      };
    }

  ]);

}());
