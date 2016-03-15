'use strict';

module.exports = [function() {
  return {
    restrict: 'EA',
    transclude: true,
    template: require('../templates/post-queue-directive.html'),
    controller: [
      '$scope',
      function($scope) {
        $scope.currentPage = 0;
        $scope.pageSize = 8;
        $scope.numberOfPages = function() {

          return Math.ceil($scope.uiList.length / $scope.pageSize);
        };
      }
    ],
    scope: {
      uiList: '=',
      scope: '='
    }
  };

}];