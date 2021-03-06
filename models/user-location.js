var mongoose = require('mongoose');

var schema = mongoose.Schema({
    event_uuid:String,
    user_uuid: String,
    createdAt: {type:Date, expires:200, default: Date.now},
    lat: Number,
    long: Number
});
var model = mongoose.model('UserLocation', schema);

module.exports = model;