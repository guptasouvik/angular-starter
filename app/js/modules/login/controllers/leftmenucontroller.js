'use strict';
module.exports = [
  '$scope',
  '$rootScope',
  '$state',
  'loggedInUser',
  function(
    $scope,
    $rootScope,
    $state,
    loggedInUser
  ) {
    console.log(loggedInUser.getData());
    $scope.active = $state.current.name;
    var indexOfhiphen = $scope.active.indexOf('-');
    if (indexOfhiphen > 0) {
      $scope.active = $scope.active.substr(0, indexOfhiphen);
    }

    $scope.isCollapsed = false;
    $scope.showMobileMenu = false;
    $scope.moduleClass = 'page-body height-inherit';
    $scope.usertype = '';
    $scope.userData = loggedInUser.getData();
    //$scope.productInfo = productInfo;

    // console.log($scope.userData);

    $scope.scope = $scope;

    $scope.loggedInUser = loggedInUser;



    $scope.doToggleMenu = function() {
      $scope.isCollapsed = !$scope.isCollapsed;
    };
    $scope.toggleMobileMenu = function() {
      $scope.showMobileMenu = !$scope.showMobileMenu;
    };
    $scope.resetMobileMenu = function(active) {
      $scope.active = active;
      $scope.showMobileMenu = false;
    };

    $scope.getActiveClass = function(checkActive) {
      if ($scope.active === checkActive) {
        return 'active';
      }
    };

  }
];
