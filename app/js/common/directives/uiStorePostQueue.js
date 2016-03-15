'use strict';

module.exports = [function() {
  return {
    restrict: 'EA',
    transclude: true,
    template: require('../templates/store-post-queue-directive.html'),
    controller: [
      '$scope',
      function($scope) {
        $scope.currentPage = 0;
        $scope.pageSize = 8;
        $scope.numberOfPages = function() {
          return Math.ceil($scope.uiStoreList.length / $scope.pageSize);
        };
        $scope.action = {
          select: 'apparel'
        };
        $scope.scope.state = 'store' + "." + $scope.action.select;
        $scope.uiStoreList = $scope.scope.storeApparelList;
        console.log($scope.scope.uiStoreList);
        console.log($scope);

        $scope.setStoreState = function() {
          $scope.updateList($scope.action.select);
          $scope.scope.state = 'store' + "." + $scope.action.select;
          console.log($scope.uiStoreList);
          console.log($scope.scope.state);
        }

        $scope.updateList = function(list) {
          console.log(list);
          switch (list) {
            case "apparel":
              $scope.uiStoreList = $scope.scope.storeApparelList;
              break;
            case "films":
              $scope.uiStoreList = $scope.scope.storeFilmsList;
              break;
            case "soundboard":
              $scope.uiStoreList = $scope.scope.storeSoundboardList;
              break;

          }
        }
      }
    ],
    scope: {
      uiStoreList: '=',
      storeApparelList: '=',
      storeFilmsList: '=',
      storeSoundboardList: '=',
      scope: '='
    }
  };

}];
