/*
 * 用户模型
 */

var User = Class(function(){
  var request = require('request');

  var API_REQUEST = request.defaults({
    baseUrl : 'http://123.57.72.114:8080/onlineLearningService-1.0.0-SNAPSHOT/api/1.0/'
  });

  function getRequst(url,data){
    var deferred = getDefer();
    API_REQUEST(url + "?" + toQueryString(data),function(err, response, body){
      if(err){
        deferred.reject(err)
      }else if(response && (response.statusCode == 200 || response.statusCode == 201)){
        try{
          deferred.resolve(JSON.parse(body));
        }catch(e){
          deferred.reject(e)
        }
      }
    })
    return deferred.promise;
  }

  return {
    createUser : function(data){
      return getRequst('user/create',data);
    },

    loginUser : function(data){
      return getRequst('user/login',data);
    },

    checkEmail : function(data){
      return getRequst('user/retrieve',data);
    },

    getUserById : function(data){
      return getRequst('user/retrieve', extend({'_returntype':'detail'} ,data))
    },

    updateUserById : function(data){
      return getRequst('user/update', data)
    }
  }
})

module.exports = new User();