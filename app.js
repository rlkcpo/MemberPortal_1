var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var home = require('./routes/home');
var restService = require('./restService');




//comment

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact)
app.use('/users', users);


//post data to the REST API
app.post('/login', function (req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    restService.getMrxUser('rlkcpo@gmail.com', function (data, response) {
        console.log(data.email)
        console.log(data.encryptedPassword);
    });
    console.log("User name and password entered");
    res.end("yes");
});



app.listen(1337, '127.0.0.1', function (){
    console.log("Started on PORT 1337");
})



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//getting input from form and sending it JSON 
/*function postHandler(request, response){
    if (req.method == 'POST') {
        var jsonString = '';
        req.on('data', function (data) {
            jsonString += data;
        });
        req.on('end', function () {
            console.log(JSON.parse(jsonString));
        });
    }
}*/
module.exports = app;
