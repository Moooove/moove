var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: String,
    uuid: String
});
var model = mongoose.model('Event', schema);

module.exports = model;