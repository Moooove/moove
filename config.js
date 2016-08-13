var config = new Object();

config.mongodbUrl = 'mongodb://summerofftech:summeroftech2016@ds153845.mlab.com:53845/heroku_pp2t0tvn/links';
config.mongodbStatus = ';'
var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
var mongodbUri = config.mongodbUrl;
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;
conn.on('error', function(){
    config.mongodbStatus = "error"
});
conn.once('open', function() {
    config.mongodbStatus = "connected"
});

config.conn = conn;




 module.exports = config;
