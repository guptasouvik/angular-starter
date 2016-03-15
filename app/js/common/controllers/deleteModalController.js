'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$modalInstance',
  'modalScope',
  function($scope, $rootScope, $modalInstance, modalScope) {
    $scope.scope = modalScope;
    console.log('Delete scope', $scope.scope);

    $scope.accept = function() {
      console.log('inside');
      $modalInstance.close();
    };

    $scope.cancel = function() {
      console.log('clicked');
      $modalInstance.dismiss('cancel');
    };
  }
];
