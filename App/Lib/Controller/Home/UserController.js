/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  var User = require("../../Java/User");
  var captchapng = require('captchapng');
  var captchacode = "";
  return {
    updateAction: function(){
      var self = this;
      if(self.isGet()){
        return self.redirect("/");
      }else if(self.isPost()){
        var user_id = self.post('id');
        return self.session('userInfo').then(function(value){
          if (!isEmpty(value)) {
            if(value.id == user_id){
              return User.updateUserById(self.post()).then(function(content){
                if(content == 0){
                  return self.success()
                }else if(content == -1){
                  throw new Error('没有找到该用户！')
                }
              }).catch(function(err){
                return self.error(err.message || "系统异常，请稍后再试！")
              })
            }else{
              self.session('userInfo', '');
              self.redirect('/');
            }
          }else{
            self.redirect('/');
          }
        })
      }
    },

    logoutAction: function() {
      var self = this;
      if(self.isGet()){
        self.session('userInfo', '');
        self.redirect('/');
      }
    },

    signinAction: function(){
      var self = this;
      if(self.isGet()){

      }else if(self.isPost()){
        var data = self.post();
        if(!data.username || !data.password){
          return self.error("请输入正确的用户名和密码")
        }
        User.createUser(data).then(function(content){
          if(isNumber(content)){
            if(content == -1){
              throw new Error("用户已经存在！")
            }else if(content == -2){
              throw new Error("系统异常，请稍后再试！")
            }else{
              self.session('userInfo',extend({},data,{id:content}))
              return self.success(content);
            }
          }else{
            throw new Error("系统异常，请稍后再试！")
          }
        }).catch(function(err){
          return self.error(err.message || "系统异常，请稍后再试！")
        })
      }
    },

    loginAction: function(){
      var self = this;
      if(self.isGet()){

      }else if(self.isPost()){
        var data = self.post();
        if(!data.username || !data.password){
          return self.err("请输入正确的用户名和密码")
        }
        User.loginUser(data).then(function(content){
          if(isNumber(content)){
            if(content == -1){
              throw new Error("没有找到该用户！")
            }else if(content == -2){
              throw new Error("用户名或者密码错误！")
            }else{
              self.session('userInfo',extend({},data,{id:content}))
              return self.success();
            }
          }else{
            throw new Error("系统异常，请稍后再试！")
          }
        }).catch(function(err){
          self.error(err.message || "系统异常，请稍后再试！");
        })
      }
    },

    checkemailAction: function(){
      var self = this;
      User.checkEmail({"username" : this.param('username')}).then(function(content){
        if(content == 0){
          return self.success({num : content})
        }else if(content == 1){
          return self.success({num : content , msg : "用户已经存在！"})
        }
      }).catch(function(err){
        self.error(err);
      })
    },

    forgetAction: function(){
      var self = this;
      if(self.isGet()){
        self.assign({
          title : "忘记密码",
          section : 'user',
          userInfo : self.userInfo
        })
        return self.display()
      }else if(self.isPost()){
        var data = self.post();
        if(data.verifycode == captchacode){
          return self.success();
        }else{
          return self.error("验证码错误！");
        }
      }
    },

    seeAction: function(){
      var self = this;
      if(self.isGet()){
        var user_id = self.get('id');
        if(!user_id){
          return self.redirect("/");
        }
        return self.session('userInfo').then(function(value){
          if (!isEmpty(value)) {
            if(value.id == user_id){
              return User.getUserById({id:user_id}).then(function(content){
                self.assign({
                  title : "查看用户",
                  section : 'user',
                  userInfo : content[0]
                })
                return self.display()
              }).catch(function(err){

              })
            }else{
              self.session('userInfo', '');
              self.redirect('/');
            }
          }else{
            self.redirect('/');
          }
        })
      }
    },

    getcodeAction: function(){
      var self = this;
      captchacode = parseInt(Math.random()*9000+1000);
      var p = new captchapng(70,38,captchacode);
      p.color(0, 12, 0, 0);
      p.color(80, 80, 200, 255);

      var img = p.getBase64();
      var imgbase64 = new Buffer(img,'base64');
      self.header({
          'Content-Type': 'image/png'
      })
      self.end(imgbase64);
    }
  };
})