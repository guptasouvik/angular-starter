'use strict';
module.exports = [
  '$scope',
  '$state',
  'loggedInUser',
  function(
    $scope,
    $state,
    loggedInUser
  ) {

    var userData = loggedInUser.getData();
    $scope.userData = loggedInUser.getData();
    $scope.userData.zips = '';
    if ($scope.userData.zipCodes && $scope.userData.zipCodes.length) {
      $scope.userData.zipCodes.forEach(function(eachZip) {
        // // console.log(eachZip);
        $scope.userData.zips += eachZip + ', ';
      });
      $scope.userData.zips = $scope.userData.zips.substr(0, $scope.userData.zips.length - 2);
      // // console.log($scope.userData.zips);
    }
    $scope.formData = {
      name: userData.name,
      gender: userData.gender
    };

    $scope.moduleClass = 'page-body login-page height-initial';
    /*$scope.submitForm = function() {
      $scope.loading = true;
      $http({
          url: util.api.editProfile,
          method: 'PUT',
          data: $scope.formData
        })
        .then(function() {
          $scope.loading = false;
        }, function() {
          $scope.loading = false;
          toastr.error(language.en.generalFailure, 'Error', {
            closeButton: true
          });
        });
    };*/
  }
];
