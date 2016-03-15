'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$state',
  'loggedInUser',
  'LoginService',
  'toastr',
  'AppConfig',
  function($scope, $rootScope, $state, loggedInUser, LoginService, toastr, AppConfig) {
    $scope.formData = {
      email: ''
    };

    $scope.moduleClass = 'page-body login-page height-initial';

    $scope.submitForm = function() {
      $rootScope.pageLoading = true;
      LoginService
        .forgotPassword($scope.formData)
        .then(function(response) {
            toastr.success(AppConfig.dialog.forgotPassword.success, 'Success');
            $state.go('login');
          },
          function(error) {
            console.log('error', error);
            toastr.error(AppConfig.dialog.forgotPassword.failure, 'Error');
          })
        .finally(function() {
          $rootScope.pageLoading = false;
        });
    };
  }
];
