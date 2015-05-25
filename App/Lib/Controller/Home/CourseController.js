/**
 * controller
 * @return
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  var Service = require("../../Service/Service");
  return {
    indexAction: function(){
      var self = this;
      Service.getAllCourses({_returntype : "detail"}).then(function(data){
        self.assign({
          courses : data,
          section : 'course',
          userInfo : self.userInfo,
          navLinks : navLinks,
          title : "课程"
        });
        self.display();
      })
    },

    tagAction : function(){
      var self = this;
      Service.getCoursesByTag({
        type : "detail",
        tag : self.post("tag")
      }).then(function(data){
        self.success(data)
      })
    },

    searchAction : function(){
      var self = this;
      Service.searchCourses({
        type : "detail",
        wd : self.post('wd')
      }).then(function(data){
        self.success(data)
      })
    },

    viewAction: function(){
      var id = this.get('id') | 0,
        self = this;
      this.assign({
        title: "课程" + id,
        navLinks : navLinks,
        userInfo : self.userInfo,
        section : 'course'
      });
      this.display();
    }
  };
})