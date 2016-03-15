'use strict';

module.exports = angular.module('AdminPanel.modules', [
  require('./login').name,
  require('./userAccounts').name
]);
