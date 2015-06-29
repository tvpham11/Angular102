;(function () {

  'use strict';
  angular.module('Vehicles')

  .service('VehicleService', ['$http', 'PARSE', '$rootScope',

    function ($http, PARSE, $rootScope) {

      var endpoint = PARSE.URL + 'classes/Vehicle/';

      // Vehicle constructor
      var Vehicle = function(options) {
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
        this.condition = 'New';
      };

      // Get a single vehicle
      this.getCar = function(id) {
        return $http.get(endpoint + id, PARSE.CONFIG);
      };

      // Get an array of all vehicles
      this.getCars = function() {
        $http.get(endpoint, PARSE.CONFIG).success(function(data) {
          $rootScope.$broadcast('AllCarsRetrieved', data);
        });
      };

      // Delete a single vehicle
      this.deleteCar = function(whichOne) {
        var deleteURL = endpoint + whichOne.objectId;
        // console.log(deleteURL);
        return $http.delete(deleteURL, PARSE.CONFIG);
      };

      // Add a new vehicle
      this.addCar = function(newVehicle) {
        var car = new Vehicle(newVehicle);

        // Submit vehicle
        return $http.post(endpoint, car, PARSE.CONFIG);
      };

      return this;

    }

  ])

}());
