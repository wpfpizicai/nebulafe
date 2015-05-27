define(function(require, exports, moudle) {
  $(function(){
    $('#test_vedio').on('click',function(e){
      var url = $(e.target).attr('data-src');
      $("#video_container").css({
        position : 'absolute',
        top : "150px",
        left : "150px",
        width : '600px',
        height : "338px"
      }).html5video({
        width : 600,
        height : 338,
        src : url ,
        loop : false,
        preload:true,
        notsuportmsg:"您的浏览器不支持html5，无法使用该插件!"
      })
    })

  })
})