;(function () {

  'use strict';
  angular.module('Vehicles')

  .service('VehicleService', ['$http', 'PARSE', '$rootScope', '$cookies',

    function ($http, PARSE, $rootScope, $cookies) {

      var endpoint = PARSE.URL + 'classes/Vehicle/';

      // Vehicle constructor
      var Vehicle = function(options) {
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
        this.condition = 'New';
        this.user = options.user;
        this.ACL = options.ACL;
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

        var userID = $cookies.get('userObjectId');

        var ACLobj = {};

        ACLobj[userID] = {
          read: true,
          write: true
        };

        newVehicle.ACL = ACLobj;

        newVehicle.user = {
          __type: 'Pointer',
          className: '_User',
          objectId: userID
        };

        var car = new Vehicle(newVehicle);

        // Submit vehicle
        return $http.post(endpoint, car, PARSE.CONFIG);

      };


    }

  ])

}());
