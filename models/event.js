var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.mongodb);

var event = mongoose.model('Cat', { uuid: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});