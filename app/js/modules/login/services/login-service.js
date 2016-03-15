'use strict';

module.exports = [
  '$q',
  'HttpService',
  'API',
  function($q, HttpService, API) {
    function login(user) {
      var deffered = $q.defer();
      var apiObject = {
        method: 'POST',
        url: API.login,
        data: user
      };

      HttpService
        .apiRequest(apiObject)
        .then(function(response) {
            deffered.resolve(response);
          },
          function(error) {
            deffered.reject(error);
          });
      return deffered.promise;
    }

    function forgotPassword(user) {
      var deffered = $q.defer();
      var apiObject = {
        method: 'POST',
        url: API.forgotPassword,
        data: user
      };

      HttpService
        .apiRequest(apiObject)
        .then(function(response) {
            // console.log('response', response);
            deffered.resolve(response);
          },
          function(error) {
            deffered.reject(error);
          });
      return deffered.promise;
    }

    return {
      login: login,
      forgotPassword: forgotPassword
    };
  }
];
