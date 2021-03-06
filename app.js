var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var handlebars = require('express3-handlebars')


var routes = require('./routes/index');
var userlogin = require('./routes/userlogin');
var createAccount = require('./routes/createAccount');
var users = require('./routes/users');
//var bucketlist_expanded = require('./routes/bucket_get_json');
//var bucketlistexpanded = require('./public/javascripts/bucketlistexpanded');

var app = express();

app.locals.memorydata = require('./data.json');

// view engine setup

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/userlogin', userlogin.userlogin);
//app.get('/createAccount', createAccount.createAccount);
// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); */

//app.get('/bucketlist', bucketlist.view);
 

// error handlers

// development error handler
// will print stacktrace
/* if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
} */

// production error handler
// no stacktraces leaked to user
/* app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}); */


module.exports = app;
