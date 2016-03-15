'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$state',
  '$timeout',
  'loggedInUser',
  'LoginService',
  'toastr',
  'AppConfig',
  function($scope, $rootScope, $state, $timeout, loggedInUser, LoginService, toastr, AppConfig) {

    $scope.moduleClass = 'page-body login-page height-inherit';

    $scope.formData = {
      email: '',
      password: ''
    };

    $scope.submitForm = function() {
      $rootScope.pageLoading = true;
      // LoginService
      //   .login($scope.formData)
      //   .then(function(response) {
      //       loggedInUser.setData(response.data);
      //       $state.go('dashboard.globalSetting');
      //       toastr.success(AppConfig.dialog.login.success, 'Welcome Admin');
      //     },
      //     function(error) {
      //       console.log('error', error);
      //       toastr.error(AppConfig.dialog.login.failure, 'Error');
      //     })
      //   .finally(function() {
      //     $rootScope.pageLoading = false;
      //   });
      $state.go('dashboard.userAccounts');
    };
  }
];
