/**
 * 格式化日期
 * @param  {[type]} date    [description]
 * @param  {[type]} pattern [description]
 * @return {[type]}         [description]
 */
Date.format = function (date, pattern) {
  if (!date) {
    date = new Date;
  }else{
    if(!isDate(date)){
      date = new Date(date);
    }
  }
  pattern = pattern || 'yyyy-MM-dd';
  var y = date.getFullYear().toString();
  var o = {
    M: date.getMonth() + 1, //month
    d: date.getDate(), //day
    h: date.getHours(), //hour
    m: date.getMinutes(), //minute
    s: date.getSeconds() //second
  };
  pattern = pattern.replace(/(y+)/ig, function(a, b) {
    return y.substr(4 - Math.min(4, b.length));
  });
  for (var i in o) {
    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function(a, b) {
      return (o[i] < 10 && b.length > 1) ? '0' + o[i] : o[i];
    });
  }
  return pattern;
}
/**
 * 获取日期
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
global.getDate = function(date){
  return Date.format(date);
}
/**
 * 获取日期和时间
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
global.getDateTime = function(date){
  return Date.format(date, "yyyy-MM-dd hh:mm:ss");
}
global.navLinks =  [
  { label: '首页',    key: 'home',    href: '/' },
  { label: '课程',    key: 'course',    href: '/course' },
  { label: '合作机构',    key: 'partner',   href: '/partner' },
  { label: '关于',    key: 'contact',   href: '/contact' }
];