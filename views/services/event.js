var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.mongodb);

var Model = mongoose.model('Event', { title: String , uuid: String });
var service = new Object();

service.newEvent = function(title){
    var model = new Model({ 'title': 'Zildjian' });
    model.save(function (err) {
        return err
    });
}
service.getEvent = function(uuid){
    Person.find({}, function(error, data){
        console.log(data);
        res.json(data);
    });
}

module.exports = service;