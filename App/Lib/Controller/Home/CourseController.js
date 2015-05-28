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
      Service.getAllCourses().then(function(data){
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
        tag : self.post("tag")
      }).then(function(data){
        self.success(data)
      })
    },

    searchAction : function(){
      var self = this;
      Service.searchCourses({
        wd : self.post('wd')
      }).then(function(data){
        self.success(data)
      })
    },

    viewAction: function(){
      var self = this;
      if(self.isGet()){
        var course_id = self.get('id');
        if(!course_id){
          return self.redirect("/course");
        }else{
          Service.getCourseById({id : course_id}).then(function(data){
            var course = data[0];
            var partner_id = course.partner;
            var partner = Service.getPartnerById({id : partner_id});
            var teachers = Service.getTeachersByCourseId({course : course_id});
            self.assign({
              title: "课程",
              course : course,
              partner : partner,
              navLinks : navLinks,
              teachers : teachers,
              userInfo : self.userInfo,
              section : 'course'
            });
            self.display();
          })
        }
      }
    },

    videoAction : function(){
      var self = this;
      if(!self.userInfo){
        return self.redirect("/");
      }
      if(self.isGet()){
        var course_id = self.get('id');
        if(!course_id){
          return self.redirect("/course");
        }
        var course = Service.getCourseById({id : course_id});
        self.assign({
          title : "课程视频",
          course : course,
          navLinks : navLinks,
          userInfo : self.userInfo,
          section : 'course'
        })
        self.display();
      }
    }
  };
})