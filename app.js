var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var db = require('./database/models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var home = require('./routes/home'); // Ruta es el nombre de la variable que trae el archivo "ruta" que se encuentra en la carpeta "routes".
var perfil = require('./routes/perfil'); //creamos una constante y requerimos el modulo

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  {secret : 'usuarios', //el texto es el que queramos, se usa para crear una capa de seguridad
   resave : false,
   saveUninitialized: true} // estas dos lineas sirven para limpiar unos warnings de consola
));
app.use(express.static(path.join(__dirname, 'public')));

//sirve para hacer cosas en todas las vistas
app.use(function(req, res, next){
  //solo se usa cuando no tenes un usuario en sesion
  if(req.session.user != undefined){
  res.locals.user = req.session.user //locals es un obj literal, si hay algo en session lo ubicas dentro de locals.user
  return next();
  }
  return next();
})

app.use(function(req, res, next){
  if (req.cookies.userId != undefined && req.session.user == undefined) { //tenemos cookie pero no tenemos sesion
    //busco al usuario en la base
    db.Usuario.findByPk(req.cookies.userId)
      .then(function(user){
        //lo cargo en la sesion
        req.session.user = user;
        res.locals.user = user
        return next();
      })
      .catch( e => console.log(e))
  } else{
    return next();
  }
}) 

//Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', home); // Cuando uno busca localhost/home se muestra la pagina. Esto es gracias a que esta conectado a la variable "home" de la linea 9.
app.use('/perfil', perfil); // Cuando uno busca localhost/perfil se muestra la pagina. Esto es gracias a que esta conectado a la variable "perfil" de la linea 10.
// el primer parametro que recibe el app es un string que sera el nombre del recurso, el segundo es el nombre de la variable donde se almacenera el modulo del recurso

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
