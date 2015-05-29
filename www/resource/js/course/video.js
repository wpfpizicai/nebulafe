define(function(require, exports, moudle) {
  require("js/widget/jquery.jplayer.min.js");
  require("js/widget/jplayer.playlist.min.js");
  $(function(){
      new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"

  }, [
    {
      title:"第1讲",
      artist:"沈素萍",
      free:true,
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC1%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC1%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.webm",
      poster:"http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english.png"
    },
    {
      title:"第2讲",
      artist:"沈素萍",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC2%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC2%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english.png"
    },
    {
      title:"第3讲",
      artist:"沈素萍",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC3%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC3%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english.png"
    },
    {
      title:"第4讲",
      artist:"沈素萍",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC4%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC4%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english.png"
    },
    {
      title:"第5讲",
      artist:"粟勤",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC5%E8%AE%B2_%E7%B2%9F%E5%8B%A4.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC5%E8%AE%B2_%E7%B2%9F%E5%8B%A4.webm",
      poster: "hhttp://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english_sq.png"
    },
    {
      title:"第6讲",
      artist:"粟勤",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC6%E8%AE%B2_%E7%B2%9F%E5%8B%A4.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC6%E8%AE%B2_%E7%B2%9F%E5%8B%A4.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english_sq.png"
    },
    {
      title:"第8讲",
      artist:"粟勤",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC8%E8%AE%B2_%E7%B2%9F%E5%8B%A4.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC8%E8%AE%B2_%E7%B2%9F%E5%8B%A4.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english_sq.png"
    },
    {
      title:"第9讲",
      artist:"沈素萍",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC9%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC9%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english.png"
    },
    {
      title:"第10讲",
      artist:"沈素萍",
      ogv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC10%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.ogv",
      webmv: "http://finace-english.oss-cn-beijing.aliyuncs.com/%E7%AC%AC10%E8%AE%B2_%E6%B2%88%E7%B4%A0%E8%90%8D.webm",
      poster: "http://finace-english.oss-cn-beijing.aliyuncs.com/banner%2Ffinance_english.png"
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