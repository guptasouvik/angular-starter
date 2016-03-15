'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$modalInstance',
  'modalScope',
  '$state',
  'loggedInUser',
  function($scope, $rootScope, $modalInstance, modalScope, $state, loggedInUser) {
    $scope.scope = modalScope;
    console.log('Logout scope', $scope.scope);

    $scope.logout = function() {
      loggedInUser.resetData();
      $modalInstance.close();
      $state.go('login');
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  }
];
