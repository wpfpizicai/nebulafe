define(function(require, exports, moudle) {
  require("js/widget/jquery.jplayer.min.js");
  require("js/widget/jplayer.playlist.min.js");
  $(function(){
      new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"

  }, [
    {
      title:"Unit1",
      artist:"沈素萍",
      free:true,
      m4v: "http://finace-english.oss-cn-beijing.aliyuncs.com/Unit1.m4v",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/Unit1.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/Unit1.webm",
      poster:"http://finace-english.oss-cn-beijing.aliyuncs.com/Unit1.jpg"
    },
    {
      title:"Finding Nemo Teaser",
      artist:"Pixar",
      m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
      ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
      webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
      poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
    },
    {
      title:"Incredibles Teaser",
      artist:"Pixar",
      m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
      ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
      webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
      poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
    }
  ], {
    swfPath: "../widget",
    supplied: "webmv, ogv, m4v",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    size: {
      width: "640px",
      height: "360px",
      cssClass: "jp-video-360p"
    }
  });
  })
})