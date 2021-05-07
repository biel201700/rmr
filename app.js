// 모듈 가져오기
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 라우팅 분리 
// 주소가 /로 시작하면 routes/index.js를 호출하라는 의미 
// 주소가 /users로 시작하면 routes/user.js를 호출하라는 의미
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var insertRouter = require('./routes/insert');
var updateRouter = require('./routes/update');
// var selectRouter = require('./routes/select');

// path
var path = require('path');

// 뷰생성
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 템플릿
app.set('view engine', 'ejs'); // 템플릿 엔진

app.use(logger('dev')); // 로그기록
app.use(express.json()); // json 사용할거다 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')));

// rmr.js에서 요청이 오면 이 라우터를 호출한다고 명시 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/insert', insertRouter);
app.use('/update', updateRouter);
// app.use('/select', selectRouter);

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
