;(function () {

  'use strict';

  angular.module('Vehicles')

  .controller('VehicleSingle', ['$scope', 'VehicleService', '$routeParams', '$rootScope',

    function($scope, VehicleService, $routeParams, $rootScope) {
      $rootScope.$broadcast('PageChange', 'Single Vehicle Page');

      console.log($routeParams);
      var id = $routeParams.id;
      VehicleService.getCar(id).success(function(data) {
        $scope.car = data;
      });
    }

  ]);

}());
