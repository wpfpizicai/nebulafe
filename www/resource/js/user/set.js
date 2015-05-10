define(function(require, exports, moudle) {
  var email = $('#js-forgot-form .ipt-email').val();
  var nickname = $('#js-forgot-form .ipt-nick').val();
  var id = $('#js-forgot-form .ipt-id').val();
  function setupMsg(selector){
    $error=$(selector);
    return function(msg){
        var msg=msg||""
            method=msg?"addClass":"removeClass";
        $error[method]("tips-error").html(msg);
    }
  }

  var forgotMsg=setupMsg("#js-g-forgot-error");

  $('#js-forgot-submit').on('click',function(e){
    var new_nickname = $.trim($('#js-forgot-form .ipt-nick').val());
    if(!new_nickname){
      forgotMsg('请输入用户名！');
      return;
    }
    if(nickname ==  new_nickname){
      forgotMsg('请输入不同的用户名！');
      return;
    }
    $.ajax({
      url:"/user/update",
      data:{
          nickname : new_nickname,
          verifycode: $('.form-control-verify input').val(),
          id : id
      },
      type:"post",
      dataType:"json",
      success:function(data){
          if(data.errno===0){
            $('.mmsg-box').show();
            setTimeout(function(){
              $('.mmsg-box').animate({opacity:0}).hide().css({opacity:1})
            },2000)
          }else{
            forgotMsg(data.errmsg||"");
          }
      },
      error:function(){
          forgotMsg("服务错误，稍后重试");
      }
    });
  })
})