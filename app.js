var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});