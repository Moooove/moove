var mongoose = require('mongoose');

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */
var config = new Object();


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://heroku_pp2t0tvn:gujq0rrlqd71tji752275hda7e@ds153845.mlab.com:53845/heroku_pp2t0tvn'
;

mongoose.connect(process.env.MONGOLAB_URI || mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    console.log("connected");
});
config.conn = conn;
 module.exports = config;
