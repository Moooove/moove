var mongoose = require('mongoose');

var schema = mongoose.Schema({
    userid: String,
    lat: Number,
    long: Number
});
var model = mongoose.model('User', schema);

module.exports = model;