define(function(require, exports, moudle) {
  var login = require('../index.js');
  $(function(){
    if($('#signin_user')[0]){
      var url = $('#start_learn').attr('data-href');
      $('#start_learn').attr({
        href : url
      })
    }else{
      $('#start_learn').on('click', function(e){
        login.signin();
      })
    }
  })
})