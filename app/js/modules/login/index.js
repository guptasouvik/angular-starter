'use strict';

module.exports = angular.module('AdminPanel.modules.user', ['ui.router'])
  .factory('loggedInUser', require('./factory/userdata'))
  .service('LoginService', require('./services/login-service'))
  .config(require('./router/router'))
  .controller('LoginController', require('./controllers/logincontroller'))
  .controller('LeftMenuController', require('./controllers/leftmenucontroller'))
  .controller('ForgotController', require('./controllers/forgotcontroller'))
  .controller('EditProfileController', require('./controllers/edit-profile'));
