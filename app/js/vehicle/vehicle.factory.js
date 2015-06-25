;(function () {

  'use strict';
  angular.module('Vehicles')

  .factory('VehicleFactory', ['$http', 'PARSE',

    function ($http, PARSE) {

      var endpoint = PARSE.URL + 'classes/Vehicle';

      // Vehicle constructor
      var Vehicle = function(options) {
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
        this.condition = 'New';
      };
      // Get an array of all vehicles
      var getVehicles = function() {
        return $http.get(endpoint, PARSE.CONFIG);
      };
      // Delete a single vehicle
      var deleteVehicle = function(whichOne) {
        var deleteURL = PARSE.URL + 'classes/Vehicle/' + whichOne.objectId;
        // console.log(deleteURL);
        return $http.delete(deleteURL, PARSE.CONFIG);
      };
      // Add a new vehicle
      var addVehicle = function(newVehicle) {
        var car = new Vehicle(newVehicle);
        // Submit vehicle
        return $http.post(endpoint, car, PARSE.CONFIG);
      };

      return {
        getCars   : getVehicles,
        deleteCar : deleteVehicle,
        addCar    : addVehicle
      };

    }

  ])

}());
