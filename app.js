// node 引用各种模块
var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 定义需要的路由文件
var apiRouter=require('./routes/api')

// 生成脚手架实例
var app = express();

app.set('views', path.join(__dirname, 'views')); // 定义模板搜索路径，在根目录的view文件下，可自定义
app.set('view engine', 'jade');    // 设置引擎模板为jade, 可自定义

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 访问已经定义的路由
app.use('/api',apiRouter)


// 错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
