'use strict';

angular.module('AdminPanel', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'angular-ui-validator',
    'toastr',
    require('./common').name,
    require('./config').name,
    require('./modules').name,
  ])
  .run([
    '$rootScope',
    '$injector',
    'loggedInUser',
    '$state',
    function($rootScope, $injector, loggedInUser, $state) {
      var $state = $injector.get('$state');

      $rootScope.$on('$stateChangeStart', function(event, toState) {
        $rootScope.pageLoading = true;
      });

      $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.loadingText = '';
        $rootScope.pageLoading = false;
      });

      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        $rootScope.pageLoading = false;
      });

      if (!loggedInUser.getData().user) {
        $state.go('login');
      }
    }
  ]);
