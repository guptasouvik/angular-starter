'use strict';

//All the application configurations are maintained here
module.exports = {
  toastr: {
    autoDismiss: true,
    containerId: 'toast-container',
    maxOpened: 5,
    newestOnTop: false,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  },
  dialog: {
    login: {
      success: 'This is the Dashboard Area',
      failure: 'Your credentials are gone'
    },
    forgotPassword: {
      success: 'The link has been sent',
      failure: 'The link could not be sent. Check your connection and try again.'
    },

    userAccounts: {
      passwordReset: {
        success: 'The link has been sent',
        failure: 'The link could not be sent. Check your connection and try again.'
      },
      search: {
        success: 'User has been found',
        failure: 'No such User is found'
      },
      loadUsers: {
        success: 'All users have been loaded',
        failure: 'Unable to load users. Please try again'
      },
      getUser: {
        success: 'User details have been loaded',
        failure: 'Unable to load user details. Please try again'
      },
      removeUser: {
        success: 'User Account has been successfully removed',
        failure: 'Failed to remove User Account. Check your connection and try again.'
      }
    }
  }
};
