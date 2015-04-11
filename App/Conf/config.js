module.exports = {
  //配置项: 配置值
  port: 8360, //监听的端口
  db_type: 'mysql', // 数据库类型
  db_host: '127.0.0.1', // 服务器地址
  db_port: '', // 端口
  db_name: 'nodejs', // 数据库名
  db_user: 'nodejs', // 用户名
  db_pwd: 'Wpf4284286', // 密码
  db_prefix: 'think_', // 数据库表前缀
  app_group_list: ['Home', 'Admin'], //分组列表
  show_exec_time: true,
  url_resource_reg: /^(upload\/|resource\/|static\/|favicon\.ico|robot\.txt)/ //判断是否是静态资源的正则
};