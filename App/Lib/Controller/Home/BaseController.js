/**
 * 项目里的Controller基类
 * 这里做一些通用的处理逻辑，其他Controller继承该类
 * @param  {[type]}
 * @return {[type]}         [description]
 */
module.exports = Controller(function(){
  'use strict';
  return {
    init: function(http){
      var self = this;
      self.super("init", http);
      // if (self.http.group ==="Home") {
      //   return self.session('userinfo').then(function(value) {
      //     if (isEmpty(value)) {
      //       if (self.isAjax()) {
      //         return self.error(403);
      //       }else{
      //         return self.redirect("/login");
      //       }
      //     }else{
      //       self.userinfo = value;
      //       self.assign('userinfo', value)
      //     }
      //   });
      // }
    }
  }
})