var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
// config
var config = require('./config');
// routes
var mainRoute = require('./routes/main');
var eventRoute = require('./routes/event');
var userLocationRoute = require('./routes/user-location');

// mongodb
mongoose.connect(config.mongodbUri);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'mongodb connection error'));
conn.once('open', function() { console.log("mongodb connected");});

// app
var app = express();

// json body parser
app.use(bodyParser.json())

// static file
app.use(express.static('public'));


// template engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// routes
app.use('/', mainRoute);
app.use('/', eventRoute);
app.use('/', userLocationRoute);

app.listen(process.env.PORT || 3000, function () {
  console.log('Moove is running');
});