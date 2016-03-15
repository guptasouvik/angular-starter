'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$modalInstance',
  'modalScope',
  'modalValue',
  function($scope, $rootScope, $modalInstance, modalScope, modalValue) {
    $scope.scope = modalScope;
    console.log('scope', $scope.scope);

    $scope.accept = function() {
      console.log('inside');
      $modalInstance.close();
    };
    $scope.removeUser = function() {
      console.log('inside remove');
      $scope.scope.removeUser();
      $modalInstance.close();

    };


    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    $scope.radio = {
      value: "radioActive"

    }
    $scope.submit = function() {
      console.log("in submit ", $scope.radio);
      console.log("in submit ", modalValue);
      $modalInstance.close();
    };

  }
];