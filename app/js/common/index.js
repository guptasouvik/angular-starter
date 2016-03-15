'use strict';

module.exports = angular.module('AdminPanel.common', [])
  .service('HttpService', require('./services/http-service'))
  .directive('uiPostQueue', require('./directives/uiPostQueue'))
  .directive('uiStorePostQueue', require('./directives/uiStorePostQueue'))
  .directive('uiFormModal', require('./directives/uiFormModal'))
  .directive('uiDeleteModal', require('./directives/uiDeleteModal'))
  .directive('uiLogoutModal', require('./directives/uiLogoutModal'))
  .directive('uiPasswordLinkModal', require('./directives/uiPasswordLinkModal'))
  .directive('uiAccountStatusModal', require('./directives/uiAccountStatusModal'))
  .directive('uiManageSequenceModal', require('./directives/uiManageSequenceModal'))
  .controller('FormModalController', require('./controllers/formModalController'))
  .controller('DeleteModalController', require('./controllers/deleteModalController'))
  .controller('LogoutModalController', require('./controllers/logoutModalController'))
  .controller('PasswordLinkModalController', require('./controllers/passwordLinkModalController'))
  .controller('AccountStatusModalController', require('./controllers/accountStatusModalController'))
  .controller('ManageSequenceModalController', require('./controllers/manageSequenceModalController'))
  .filter('startFrom', require('./filters/startFromFilter'));
// .factory('UpdateSequenceFactory', require('./factories/updateSequenceFactory'));
