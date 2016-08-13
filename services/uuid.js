var uuid = require('node-uuid');

var service = new Object();
service.newUuid = function(){
    return uuid.v4();
}

module.exports = service;