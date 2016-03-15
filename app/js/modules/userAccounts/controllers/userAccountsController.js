'use strict';

module.exports = [
  '$scope',
  '$state',
  '$rootScope',
  'UserAccountsService',
  'loggedInUser',
  'toastr',
  'AppConfig',
  function($scope, $state, $rootScope, UserAccountsService, loggedInUser, toastr, AppConfig) {

    $scope.scope = $scope;
    $scope.scope.state = 'order';

    $scope.user = {
      searchText: ''
    };

    $scope.users = [];

    $scope.loadUsers = function() {
      // $rootScope.pageLoading = true;
      // UserAccountsService
      //   .getUsers()
      //   .then(function(response) {
      //       console.log('Response', response);
      //       $scope.users = response.data;
      //       toastr.success(AppConfig.dialog.userAccounts.loadUsers.success, 'Success');
      //     },
      //     function(error) {
      //       console.log('error', error);
      //       toastr.error(AppConfig.dialog.userAccounts.loadUsers.failure, 'Error');
      //     }).finally(function() {
      //     $rootScope.pageLoading = false;
      //   });
    };

    $scope.viewUserDetails = function(user) {
      $state.go('dashboard.userDetails', {
        id: user._id
      });
    };

    $scope.searchUser = function() {
      // $rootScope.pageLoading = true;
      // UserAccountsService
      //   .searchUser($scope.user.searchText)
      //   .then(function(response) {
      //       var arr = [];
      //       arr.push(response.data);
      //       $scope.users = arr;
      //       toastr.success(AppConfig.dialog.userAccounts.search.success, 'Success');
      //     },
      //     function(error) {
      //       console.log('error', error);
      //       toastr.error(AppConfig.dialog.userAccounts.search.failure, 'Error');
      //     }).finally(function() {
      //     $rootScope.pageLoading = false;
      //   });
    };

    $scope.currentPage = 0;
    $scope.pageSize = 8;
    $scope.numberOfPages = function() {
      return Math.ceil($scope.users.length / $scope.pageSize);
    };
  }
];
