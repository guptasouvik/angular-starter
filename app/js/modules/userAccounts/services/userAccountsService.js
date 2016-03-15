'use strict';

module.exports = [
  '$q',
  'HttpService',
  'API',
  'loggedInUser',
  function($q, HttpService, API, loggedInUser) {
    function getUsers() {
      var deffered = $q.defer();
      var apiObject = {
        url: API.users,
        token: loggedInUser.getData().token
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

    function sendResetPasswordLink(id) {
      var deffered = $q.defer();
      var apiObject = {
        url: API.sendPassword + id,
        token: loggedInUser.getData().token
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

    function removeUser(id) {
      var deffered = $q.defer();
      var apiObject = {
        url: API.removeUser + id,
        method: 'DELETE',
        token: loggedInUser.getData().token
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


    function getUser(id) {
      var deffered = $q.defer();
      var apiObject = {
        url: API.user + id,
        token: loggedInUser.getData().token
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

    function searchUser(email) {
      var deffered = $q.defer();
      var apiObject = {
        url: API.searchUser + email,
        token: loggedInUser.getData().token
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

    return {
      getUsers: getUsers,
      getUser: getUser,
      searchUser: searchUser,
      sendResetPasswordLink: sendResetPasswordLink,
      removeUser: removeUser
    };
  }
];