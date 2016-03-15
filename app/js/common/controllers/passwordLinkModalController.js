'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$modalInstance',
  'modalScope',
  function($scope, $rootScope, $modalInstance, modalScope) {
    $scope.scope = modalScope;
    console.log('scope', $scope.scope);

    $scope.sendResetPasswordLink = function() {
      console.log('inside');
      $scope.scope.sendResetPasswordLink();
      $modalInstance.close();
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

  }
];