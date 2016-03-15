'use strict';

module.exports = [
  '$stateProvider',
  '$injector',
  '$urlRouterProvider',
  function($stateProvider, $injector, $urlRouterProvider) {
    $stateProvider
      .state('dashboard.userAccounts', {
        url: '/userAccounts',
        template: require('../templates/user-accounts.html'),
        controller: 'UserAccountsController'
      })
      .state('dashboard.userDetails', {
        url: '/userDetails/:id',
        template: require('../templates/user-details.html'),
        controller: 'UserDetailssController'
      });
  }
];
