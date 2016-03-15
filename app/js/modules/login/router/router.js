'use strict';
module.exports = [
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: require('../templates/login.html'),
        controller: 'LoginController'
          // resolve: {
          //   login: function($q, loggedInUser) {
          //     var deferred = $q.defer();
          //     if (loggedInUser.getData().user) {
          //       deferred.reject();
          //     } else {
          //       deferred.resolve();
          //     }
          //     return deferred.promise;
          //   }
          // }

      })
      .state('login-forgot', {
        url: '/forgot-password',
        template: require('../templates/forgot-password.html'),
        controller: 'ForgotController'
      })
      .state('dashboard', {
        url: '/dashboard',
        template: require('../templates/leftmenu.html'),
        abstract: true,
        controller: 'LeftMenuController'
          // resolve: {
          //   logout: function($q, loggedInUser) {
          //     var deferred = $q.defer();
          //     if (!loggedInUser.getData().token) {
          //       deferred.reject();
          //     } else {
          //       deferred.resolve();
          //     }
          //     return deferred.promise;
          //   }
          // }

      })
      .state('dashboard.editprofile', {
        url: '/editprofile',
        template: require('../templates/edit-profile.html'),
        controller: 'EditProfileController'
      });

    $urlRouterProvider.otherwise('/login');
  }
];
