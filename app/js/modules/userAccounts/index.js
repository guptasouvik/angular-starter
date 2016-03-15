'use strict';

module.exports =
  angular.module('AdminPanel.modules.userAccounts', ['ui.router'])
  .config(require('./router/router'))
  .controller('UserAccountsController', require('./controllers/userAccountsController'))
  .controller('UserDetailssController', require('./controllers/userDetailsController'))
  .service('UserAccountsService', require('./services/userAccountsService'));
