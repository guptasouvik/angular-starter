'use strict';

module.exports = [
  '$scope',
  '$state',
  '$rootScope',
  '$stateParams',
  'UserAccountsService',
  'loggedInUser',
  'toastr',
  'AppConfig',
  function($scope, $state, $rootScope, $stateParams, UserAccountsService, loggedInUser, toastr, AppConfig) {

    $scope.scope = $scope;
    $scope.scope.state = 'order';
    $scope.action = {
      select: "select-action"
    };

    $scope.getUser = function() {
      // $rootScope.pageLoading = true;
      // UserAccountsService
      //   .getUser($stateParams.id)
      //   .then(function(response) {
      //       console.log('Response', response);

      //       $scope.user = response.data;
      //       console.log("in scope user ", $scope.user);
      //       toastr.success(AppConfig.dialog.userAccounts.getUser.success, 'Success');
      //     },
      //     function(error) {
      //       console.log('error', error);
      //       toastr.error(AppConfig.dialog.userAccounts.getUser.failure, 'Error');
      //     }).finally(function() {

      //     $rootScope.pageLoading = false;
      //   });
    };
    $scope.sendResetPasswordLink = function() {
      // $rootScope.pageLoading = true;
      // UserAccountsService
      //   .sendResetPasswordLink($stateParams.id)
      //   .then(function(response) {
      //       console.log("password reset", response);
      //       toastr.success(AppConfig.dialog.userAccounts.passwordReset.success, 'Success');
      //     },
      //     function(error) {
      //       console.log('error', error);
      //       toastr.error(AppConfig.dialog.userAccounts.passwordReset.failure, 'Error');
      //     })
      //   .finally(function() {
      //     $rootScope.pageLoading = false;
      //   });
    };
    $scope.removeUser = function() {
      // $rootScope.pageLoading = true;
      // UserAccountsService
      //   .removeUser($stateParams.id)
      //   .then(function(response) {
      //       console.log("USER REMOVED", response);
      //       toastr.success(AppConfig.dialog.userAccounts.removeUser.success, 'Success');
      //       $state.go('dashboard.userAccounts');
      //     },
      //     function(error) {
      //       console.log('error', error);
      //       toastr.error(AppConfig.dialog.userAccounts.removeUser.failure, 'Error');
      //     })
      //   .finally(function() {
      //     $rootScope.pageLoading = false;
      //   });
    };
    $scope.selectAction = function() {
      console.log("in select ", $scope.scope);
      if ($scope.action.select === "password-link") {
        $scope.scope.openPasswordLink();

      } else if ($scope.action.select === "account-status") {
        $scope.scope.openAccountStatus();

      }

    };
  }
];
