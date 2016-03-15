'use strict';

module.exports = angular.module('AdminPanel.config', [])
  .constant('AppConfig', require('./config'))
  .constant('AppConstant', require('./constant'))
  .constant('API', require('./api'));
