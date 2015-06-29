;(function () {

  'use strict';

  angular.module('Vehicles')

  .service('UserService', ['PARSE', '$http', '$cookies',

    function(PARSE, $http, $cookies) {

      this.checkUser = function() {
        // body...
      };

      this.logIn = function() {

      };

      this.logOut = function() {

      };

      this.register = function(user) {
        $http.post(PARSE.URL + 'users', user, PARSE.CONFIG)
          .success(function(data) {
            $cookies.put('sessionToken', data.sessionToken);
          }
        );
      };

    }

  ]);

}());
