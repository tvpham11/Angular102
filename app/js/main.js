;(function (){

  'use strict';

  angular.module('Vehicles', ['ngRoute'])

  .constant('PARSE', {

    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'CWZZlYbxqfYRs0iYORRt4UvaEx5tmFcVusdUxrtW',
        'X-Parse-REST-API-Key'  : 'cQUy84sNmng4FEXftpwKXxEEr8iANxjuGyIkfZIY'
      }
    }

  })

  .config( [ '$routeProvider',
    function($routeProvider) {

      $routeProvider.when('/', {

        controller: 'VehicleList',
        templateUrl: 'js/vehicle/vehiclesList.tpl.html'

      })

      .when('/add', {

        controller: 'Vehicle',
        templateUrl: 'js/vehicle/add.tpl.html'

      })

      .when('/about', {

        controller: 'Vehicle',
        templateUrl: 'js/vehicle/about.tpl.html'

      });
    }

  ]);

}());
