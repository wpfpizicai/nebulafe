define(function(require, exports, moudle) {
  var Course = function(){
    this.init();
  };

  Course.prototype = {
    init : function(){
      var me = this;
      me.bind();
      me.serachByName();
    },

    getList : function(){
      var me = this;
      var tags = [];
      $('input:checked', '#course_tags').each(function(i, val){
        tags.push($(val).next().html());
      })
      return tags.join(",");
    },

    uncheckList : function(){
      var me = this;
      $('input','#course_tags').attr('checked', false);
    },

    getCourseByTag : function(){
      var me = this;
      var tags = me.getList();
      if(tags.length == 0){
        window.location.reload()
      }else{
        $.ajax({
          url:"/course/tag",
          data: {tag : me.getList()},
          type :"post",
          dataType:"json",
          success:function(data){
            if(data.errno===0){
              me.drawCourses({courses : data.data});
            }
          }
        })
      }
    },

    uncheckAllInput : function(){
      $('#categories_all').attr('checked', false);
    },

    serachByName : function(){
      var me = this;
      $('#search_btn').on('click',function(e){
        var s_text = $.trim($('#search_content').val());
        if(!s_text){
          return
        }
        $.ajax({
          url : "/course/search",
          data : {wd : s_text},
          type : "post",
          dataType : 'json',
          success : function(data){
            if(data.errno === 0){
              me.drawCourses({courses : data.data})
            }
          }
        })
      })
    },

    drawCourses : function(data){
      if(data){
        var tpl = ['<%courses.forEach(function(val){%><div class="course-item">',
              '<div class="col-md-2 col-xs-3">',
                '<img src="/resource/img/DataScientistsToolbox.jpg" width="120" height="68">',
              '</div>',
              '<div class="col-md-7 col-xs-6">',
                '<div class="c-partner"><%= val.partner%></div>',
                '<div class="c-title"><a href="/course/view"><%=val.title%></a></div>',
                '<div class="c-teacher">授课教师 <%=val.teacher%></div>',
              '</div>',
              '<div class="col-xs-3 text-right">',
                '<p>6月 1日, 2015<br>4 个星期</p>',
                '<button class="btn btn-info">认证&nbsp;证书</button>',
              '</div>',
            '</div><%})%>'].join("");
        $('#courses').html( _.template(tpl ,data))
      }
    },

    bind : function(){
      var me = this;
      $('#course_tags').on('click',function(e){
        if($(e.target) && $(e.target).attr("data_id")){
          var tag = $(e.target).attr("data_id");
          if(tag == "all"){
            me.uncheckList();
            window.location.reload();
          }else{
            me.uncheckAllInput();
            me.getCourseByTag();
          }
        }
      })
    }
  };

  var course = new Course()
})