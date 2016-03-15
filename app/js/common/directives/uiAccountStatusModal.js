'use strict';

module.exports = [
  '$uibModal',
  function($uibModal) {
    return {
      transclude: true,
      restrict: 'EA',
      template: '<a href="" ng-click="open()" ng-transclude></a>',
      scope: {
        size: "@",
        scope: "=scope",
        body: "@",
        bodyClass: "@",
        userId: '='
      },
      link: function(scope, element, attrs) {
        scope.template = './resources/templates/account-status-modal-directive.html';
        scope.scope.openAccountStatus = function() {
          var modalInstance = $uibModal.open({
            templateUrl: scope.template,
            controller: 'AccountStatusModalController',
            controllerAs: 'AccountStatusModalController',
            size: attrs.size ? attrs.size : '',
            backdrop: attrs.backdrop ? attrs.backdrop : true,
            resolve: {
              modalScope: function() {
                return scope.scope ? scope.scope : {};
              },
              modalValue: function() {
                console.log("in mod val ", scope.scope.user.id);
                return scope.scope.user.id;
              }
            }
          });
          modalInstance.result.then(function() {
            //console.debug('success');
          }, function() {
            //console.debug('error');
          });
        };
      }
    };

  }
];
