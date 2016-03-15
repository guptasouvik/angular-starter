'use strict';

module.exports = [
  '$uibModal',
  function($uibModal) {
    return {
      transclude: true,
      restrict: 'EA',
      template: '<a href="" ng-click="open()" ng-transclude></a>',
      scope: {
        name: "@",
        size: "@",
        scope: "=",
        body: "@",
        bodyClass: "@",
        mode: '@',
        orderitem: '@',
        uiItem: "@",
        uiPost: '@'
      },
      link: function(scope, element, attrs) {
        scope.open = function() {

          switch (scope.scope.state) {
            case 'blog':
              scope.template = './resources/templates/blog-form-modal-directive.html';
              break;
            case 'media':
              scope.template = './resources/templates/media-form-modal-directive.html';
              break;
            case 'store.apparel':
              scope.template = './resources/templates/store-form-modal-apparel-directive.html';
              break;
            case 'store.films':
              scope.template = './resources/templates/store-form-modal-films-directive.html';
              break;
            case 'store.soundboard':
              scope.template = './resources/templates/store-form-modal-soundboard-directive.html';
              break;
            case 'order':
              scope.template = './resources/templates/order-details-modal.html';
              break;
          }
          console.log("in dir ", scope.orderitem);
          var modalInstance = $uibModal.open({
            templateUrl: scope.template,
            controller: 'FormModalController',
            controllerAs: 'FormModalController',
            size: attrs.size ? attrs.size : 'lg',
            backdrop: attrs.backdrop ? attrs.backdrop : true,

            resolve: {
              modalSetting: function() {
                return {
                  name: scope.name ? scope.name : 'Form Modal'
                };
              },
              modalScope: function() {
                return scope.scope ? scope.scope : {};
              },
              modalMode: function() {
                console.log(scope.mode);
                return scope.mode ? scope.mode : 'add';
              },
              modalItem: function() {
                console.log("in modal ", scope.orderitem);
                return scope.orderitem;
              },

              modalGetItem: function() {
                console.log("get item", scope.uiItem);
                return scope.uiItem;
              },

              modalPost: function() {
                console.log("in post ", scope.uiPost);
                return scope.uiPost;
              }


            }
          });

          modalInstance.result.then(function() {
            console.log('success');
          }, function() {
            //console.debug('error');
          });
        };
      }
    };

  }
];