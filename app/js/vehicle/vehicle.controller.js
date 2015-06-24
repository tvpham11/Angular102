;(function () {

  'use strict';

  angular.module('Vehicles')

  .controller('Vehicle', ['$scope', function($scope) {

    // List of vehicles
    $scope.vehicleList = [];

    // Vehicle constructor
    var Vehicle = function(options) {
      this.make = options.make;
      this.model = options.model;
      this.year = options.year;
    };

    // Add vehicle method
    $scope.addVehicle = function(x) {
      var car = new Vehicle(x);
      $scope.vehicleList.push(car);
      $scope.car = {};
    };

  }]);

}());
