'use strict';

module.exports = function() {

  var loggedinUser = {
    userData: {}
  };

  function setData(data) {
    loggedinUser.userData = data;
  }

  function getData() {
    return loggedinUser.userData;
  }

  function resetData() {
    loggedinUser.userData = {};
  }

  return {
    setData: setData,
    getData: getData,
    resetData: resetData
  };

};
