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
      },
      link: function(scope, element, attrs) {

        scope.template = './resources/templates/password-link-modal-directive.html';
        scope.scope.openPasswordLink = function() {
          var modalInstance = $uibModal.open({
            templateUrl: scope.template,
            controller: 'PasswordLinkModalController',
            controllerAs: 'PasswordLinkModalController',
            size: attrs.size ? attrs.size : '',
            backdrop: attrs.backdrop ? attrs.backdrop : true,
            resolve: {
              modalScope: function() {
                return scope.scope ? scope.scope : {};
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
