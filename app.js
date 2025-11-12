var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var consumoRouter = require('./routes/consumo'); 
var estacionRouter = require('./routes/estacion'); 
var estado_estacionRouter = require('./routes/estado_estacion'); 
var propietarioRouter = require('./routes/propietario'); 
var registro_notificacionRouter = require('./routes/registro_notificaciones'); 
var rolRouter = require('./routes/rol'); 
var usuarioRouter = require('./routes/usuario'); 

var app = express();


app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/consumo', consumoRouter); 
app.use('/estacion', estacionRouter); 
app.use('/estado_estacion', estado_estacionRouter); 
app.use('/propietario', propietarioRouter); 
app.use('/registro_notificacion', registro_notificacionRouter); 
app.use('/rol', rolRouter); 
app.use('/usuario', usuarioRouter); 

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
