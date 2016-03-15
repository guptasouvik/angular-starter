'use strict';

module.exports = [
  '$q',
  '$http',
  function($q, $http) {
    return {
      apiRequest: function apiRequest(ApiObj) {
        var deffered = $q.defer();
        // ApiObj.headers = {
        //   'x-auth-deviceid': 'admin',
        //   'x-auth-devicetype': '4',
        //   'x-auth-token': ApiObj.token || ''
        // };
        $http({
            method: ApiObj.method || 'GET',
            // headers: ApiObj.headers,
            url: ApiObj.url || '',
            params: ApiObj.params || {},
            data: ApiObj.data || {}
          })
          .success(function(data) {
            // if (data.success) {
            //   // console.log('data', data);
            //   deffered.resolve(data);
            // } else {
            //   // console.log('error', data);
            //   deffered.reject(data);
            // }
            deffered.resolve(data);
          })
          .error(function(error) {
            deffered.reject(error);
          });
        return deffered.promise;
      }
    };
  }
];
