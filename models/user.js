var mongoose = require('mongoose');

var schema = mongoose.Schema({
    event_uuid:String,
    user_uuid: String,
    timeout: {type:Date, expires:'20s', default: Date.now()},
    lat: Number,
    long: Number
});
var model = mongoose.model('User', schema);

module.exports = model;