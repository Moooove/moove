var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
// config
var config = require('./config');
// routes
var indexRoute = require('./routes/index');
var eventRoute = require('./routes/event');

// mongodb
mongoose.connect(config.mongodbUri);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'mongodb connection error'));
conn.once('open', function() { console.log("mongodb connected");});

// app
var app = express();

// json body parser
app.use(bodyParser.json())

// template engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// routes
app.use('/', indexRoute);
app.use('/', eventRoute);

app.listen(process.env.PORT || 3000, function () {
  console.log('Moove is running');
});