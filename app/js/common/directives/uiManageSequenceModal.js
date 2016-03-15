'use strict';

module.exports = [
  '$uibModal',
  function($uibModal) {
    return {
      transclude: true,
      restrict: 'EA',
      template: '<a href=""class="white-text" ng-click="open()" ng-transclude></a>',
      scope: {
        size: "@",
        scope: "=",
        body: "@",
        bodyClass: "@",
        list: "="
      },
      link: function(scope, element, attrs) {
        scope.template = './resources/templates/manage-sequence-modal-directive.html';
        scope.open = function() {
          var modalInstance = $uibModal.open({
            templateUrl: scope.template,
            controller: 'ManageSequenceModalController',
            controllerAs: 'ManageSequenceModalController',
            size: attrs.size ? attrs.size : '',
            backdrop: attrs.backdrop ? attrs.backdrop : true,
            resolve: {
              modalScope: function() {
                return scope.scope ? scope.scope : {};
              },
              modalList: function() {
                return scope.list;
              }
            }
          });
          modalInstance.result.then(function() {
            var manageSequenceModal = document.getElementsByClassName("manage-sequence-modal")[0];
            manageSequenceModal.style.height = manageSequenceModal.offsetHeight;
          }, function() {
            //console.debug('error');
          });
        };
      }
    };

  }
];
