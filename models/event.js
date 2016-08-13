var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title: String,
    uuid: String
});
var Event = mongoose.model('Event', schema);

module.exports = Event;