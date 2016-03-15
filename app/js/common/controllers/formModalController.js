'use strict';

module.exports = [
  '$scope',
  '$rootScope',
  '$modalInstance',
  'modalSetting',
  'modalScope',
  'modalMode',
  'modalItem',
  '$compile',
  'modalGetItem',
  '$timeout',
  'modalPost',
  function($scope, $rootScope, $modalInstance, modalSetting, modalScope, modalMode, modalItem, $compile, modalGetItem, $timeout, modalPost) {
    $scope.scope = modalScope;
    $scope.setting = modalSetting;
    $scope.mode = modalMode;

    console.log('scope', $scope.scope);

    console.log('this scope', $scope);

    switch ($scope.scope.state) {
      case "media":
        if (modalGetItem) {
          console.log("in form controller", modalGetItem);
          $scope.scope.media = JSON.parse(modalGetItem);
          console.log($scope.scope.media);
        } else {
          $scope.scope.media = {};
        }
        $scope.modifyMedia = function() {
          $scope.scope.modifyMedia($scope.mode);
          $modalInstance.close();
        };
        break;
      case "blog":
        if (modalGetItem) {
          console.log(JSON.parse(modalGetItem));
        }

        var bodyTextCount = 0,
          urlCount = 0,
          imageCount = 0,
          subHeadingCount = 0;
        $scope.action = {
          select: "selectToAdd"
        };
        $scope.scope.blog = {
          "status": "In Queue",
          "date": "",
          "time": "",
          "title": "",
          "publishDateTime": "",
          "blogContent": []
        };

        $scope.sanitiseArray = function() {

          bodyTextCount = urlCount = imageCount = subHeadingCount = 0;
          $scope.scope.blog.blogContent.forEach(function(elem, index) {
            switch (elem.type) {
              case 1:
                imageCount++;
                elem.id = elem.name = "img-" + imageCount;
                break;
              case 2:
                urlCount++;
                elem.id = elem.name = "url-" + urlCount;
                break;
              case 3:
                bodyTextCount++;
                elem.id = elem.name = "desc-" + bodyTextCount;
                break;
              case 4:
                subHeadingCount++;
                elem.id = elem.name = "sub-" + subHeadingCount;
                break;

            }
          });
        };

        $scope.addElement = function() {
          switch ($scope.action.select) {
            case "image":
              imageCount++;
              $scope.scope.blog.blogContent.push({
                "id": "img-" + imageCount,
                "name": "img-" + imageCount,
                "type": 1
              });
              break;
            case "video":
              urlCount++;
              $scope.scope.blog.blogContent.push({
                "id": "url-" + urlCount,
                "name": "url-" + urlCount,
                "type": 2,
                "value": ""
              });
              break;
            case "bodyText":
              bodyTextCount++;
              $scope.scope.blog.blogContent.push({
                "id": "desc-" + bodyTextCount,
                "name": "desc-" + bodyTextCount,
                "type": 3,
                "value": ""
              });
              break;
            case "subHeading":
              subHeadingCount++;
              $scope.scope.blog.blogContent.push({
                "id": "subHeading-" + subHeadingCount,
                "name": "subHeading-" + subHeadingCount,
                "type": 4,
                "value": ""
              });
              break;
          }
        };

        if (modalGetItem) {
          $scope.scope.blog = JSON.parse(modalGetItem);
          $scope.sanitiseArray();
        }

        $scope.deleteItem = function(index) {
          $scope.scope.blog.blogContent.splice(index, 1);
          console.log("after delete:", $scope.scope.blog.blogContent);
          $scope.sanitiseArray();
        };

        $scope.modifyBlog = function() {
          $scope.scope.modifyBlog($scope.mode);
          $modalInstance.close();
        };
        break;
      case "store.apparel":
        if (modalPost) {
          console.log("in form controller", modalPost);
          $scope.scope.storeApparels = JSON.parse(modalPost);
          console.log($scope.scope.storeApparels);
        } else {
          $scope.scope.storeApparels = {};
        }
        $scope.modifyStoreApparels = function() {
          $scope.scope.modifyStoreApparels($scope.mode);
          $modalInstance.close();
        };
        break;
      case "store.films":
        if (modalPost) {
          console.log("in form controller", modalPost);
          $scope.scope.storeFilmsAndAlbums = JSON.parse(modalPost);
          console.log($scope.scope.storeFilmsAndAlbums);
        } else {
          $scope.scope.storeFilmsAndAlbums = {};
        }
        $scope.modifyStoreFilms = function() {
          $scope.scope.modifyStoreFilmsAndAlbums($scope.mode);
          $modalInstance.close();
        };
        break;
      case "store.soundboard":
        if (modalPost) {
          console.log("in form controller", modalPost);
          $scope.scope.storeSoundboard = JSON.parse(modalPost);
          console.log($scope.scope.storeSoundboard);
        } else {
          $scope.scope.storeSoundboard = {};
        }
        $scope.modifyStoreSoundboard = function() {
          $scope.scope.modifyStoreSoundboard($scope.mode);
          $modalInstance.close();
        };
        break;
    }
    if (modalItem) {
      $scope.order = JSON.parse(modalItem);
      console.log("in scope orderid ", $scope.order);
    }

    $scope.cancel = function() {
      console.log('cancel');
      $modalInstance.dismiss('cancel');
    };
  }
];
