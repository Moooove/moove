// import node modules
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
// import routes
var indexRoute = require('./routes/index');
var app = express();

// template engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

// routes
app.use('/', indexRoute);

app.listen(process.env.PORT || 3000, function () {

  console.log('Example app listening on port 3000!');
});