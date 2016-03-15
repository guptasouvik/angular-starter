'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$modalInstance',
  'modalScope',
  'modalList',
  // 'UpdateSequenceFactory',
  function($scope, $rootScope, $modalInstance, modalScope, modalList) {
    $scope.scope = modalScope;
    console.log($scope.scope);
    $scope.uiList = modalList;
    $scope.tmpList = angular.copy(modalList);
    $scope.sortingLog = [];
    console.log("innn ", $scope.tmpList);

    console.log($scope.scope.state);

    function filterIds(array) {
      var updatedArray = [];
      array.forEach(function(each) {
        updatedArray.push(each._id);
      });
      return updatedArray;
    }

    switch ($scope.scope.state) {
      case 'globalSettings':
        $scope.saveSequence = function() {
          modalList = $scope.updatedList;
          $scope.scope.saveGlobalSettingsSequence(filterIds($scope.tmpList));
          $modalInstance.close();
        };
        break;
      case 'media':
        $scope.saveSequence = function() {
          modalList = $scope.updatedList;
          $scope.scope.saveMediaSequence(filterIds($scope.tmpList));
          $modalInstance.close();
        };
        break;
      case 'blog':
        $scope.saveSequence = function() {
          modalList = $scope.updatedList;
          $scope.scope.saveBlogSequence(filterIds($scope.tmpList));
          $modalInstance.close();
        };
        break;
      case 'store.apparel':
        $scope.saveSequence = function() {
          modalList = $scope.updatedList;
          $scope.scope.saveStoreApparelSequence(filterIds($scope.tmpList));
          $modalInstance.close();
        };
        break;
      case 'store.films':
        $scope.saveSequence = function() {
          modalList = $scope.updatedList;
          $scope.scope.saveStoreFilmsSequence(filterIds($scope.tmpList));
          $modalInstance.close();
        };
        break;
      case 'store.soundboard':
        $scope.saveSequence = function() {
          modalList = $scope.updatedList;
          $scope.scope.saveStoreSoundboardSequence(filterIds($scope.tmpList));
          $modalInstance.close();
        };
        break;
    }

    $scope.sortableOptions = {
      update: function(e, ui) {
        var logEntry = $scope.tmpList.map(function(i) {
          return i;
        }).join(', ');
      },
      stop: function(e, ui) {
        // this callback has the changed model
        var logEntry = $scope.tmpList.map(function(i) {
          return i;
        }).join(', ');
        $scope.updatedList = $scope.tmpList;
      }
    };

    $scope.isHorizontal = false;
    $scope.autoFloating = false;

    $scope.uiFloatingUpdate = function() {
      if ($scope.autoFloating) {
        $scope.sortableOptions['ui-floating'] = 'auto';
      } else {
        $scope.sortableOptions['ui-floating'] = $scope.isHorizontal;
      }
    };

    $scope.flip = function() {
      $scope.isHorizontal = !$scope.isHorizontal;
      $scope.uiFloatingUpdate();
    };
    $scope.flip();



    $scope.cancel = function() {
      $scope.uiList = $scope.arr;
      $modalInstance.dismiss('cancel');
    };
  }
];
