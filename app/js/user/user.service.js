;(function () {

  'use strict';

  angular.module('Vehicles')

  .service('UserService', ['PARSE', '$http', '$cookies', '$location',

    function(PARSE, $http, $cookies, $location) {

      var _routeUser = function(st) {
        if (st === undefined) {
          // route to Register page
          $location.path('/register');
        } else if ($location.path() === '/register') {
          // route to Home page
          $location.path('/');
        }
      };

      var _updateToken = function(st) {
        if (st !== undefined) {
          PARSE.CONFIG.headers['X-Parse-Session-Token'] = st;
        }
        _routeUser(st);
      };

      var _successLogIn = function(data) {
        $cookies.put('sessionToken', data.sessionToken);
        $cookies.put('userObjectId', data.objectId);

        $location.path('/');
      };


      this.checkUser = function() {
        var st = $cookies.get('sessionToken');
        _updateToken(st);
      };

      this.logIn = function(user) {
        $http({
          method: 'GET',
          url: PARSE.URL + 'login',
          headers: PARSE.CONFIG.headers,
          params: user
        }).success(function(data) {
          _successLogIn(data);
        });
      };

      this.logOut = function() {
        $http.post(PARSE.URL, + 'logout', {}, PARSE.CONFIG)
          .success(function() {
            $cookies.remove('sessionToken');
            $cookies.remove('userObjectId');
            $location.path('/register');
            PARSE.CONFIG.headers['X-Parse-Session-Token'] = '';
          }
        );
      };

      this.register = function(user) {
        $http.post(PARSE.URL + 'users', user, PARSE.CONFIG)
          .success(function(data) {
            _successLogIn(data);
          }
        );
      };

    }

  ]);

}());
