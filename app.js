var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//path.resolve(__dirname, '../dist/index.html')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

/* test */
var BookSchema = require('mymodels');
//var router = express.Router();
//router.get('/', function(req, res, next) {
app.use(function(req, res, next) {
//  res.send('Wiki home page');
  console.log("entering test route....");
var test1 = new BookSchema({title:'anamewasgiven'});
var test2 = new BookSchema({ "isbn":"211333122, 98872233321123","title":"How to Build MEVN Stack","author": "Didin J.","description":"The comprehensive step by step tutorial on how to build MEVN (MongoDB, Express.js, Vue.js and Node.js) stack web application from scratch","published_year":"2017","publisher":"Djamware.com" });
  test2.save(function (err,test1) {
    if (err) return console.error(err);
    console.log("saving book with name: " + test1.title);
  });
/*test1.find(function (err,test1) {
  if (err) return console.error(err);
  console.log("finding any book in collection: " + test1);
})*/
  res.send('Express RESTful API');
//Book.find(function (err, products) {
//    res.json(products);
//  });

});
/* end of test */

/*
var book = require('myroutes');
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.send('error' + err.message);
  res.render('error');//todo la vue erreur n'existe pas
});


app.set('views', path.join(__dirname, 'dist'));
//app.set('views', __dirname + '/views');
//app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

*/

//import mongoose from 'mongoose';
var mongoose = require('mongoose');
//mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mevn', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
// mongoose.on('error', console.error.bind(console, 'connection error:'));

module.exports = app;

