var express = require('express');
// config
var config = require('../config')
// models
var UserLocation = require('../models/user-location');
var Event = require('../models/event');
// services
var uuidService = require('../services/uuid');

var router = express.Router();
router.post('/userLocation/update', function (req, res) {
    // validation
    if (req.body === undefined 
        && req.body.event_uuid === undefined 
        && req.body.user_uuid === undefined
        && req.body.lat === undefined
        && req.body.long === undefined) {
        res.send({
            status: false,
            msg: 'Invalid argument',
        });
        return
    }
    
    var obj = {
        event_uuid: req.body.event_uuid, 
        user_uuid: req.body.user_uuid,
        lat: req.body.lat, 
        long: req.body.long
    }
    var keys = {
        event_uuid: obj.event_uuid, 
        user_uuid: obj.user_uuid
    }
    UserLocation.update(keys, obj, {upsert: true},function (err) {
        if (err) {
            console.log(err);
            res.send({
                status: false,
                msg: 'Internal error',
            });
        } else {
            res.send({
                status: true,
                msg: ''
            })
        }
    });
});

router.post('/userLocations/', function (req, res) {
    // validation
    if (req.body === undefined 
        && req.body.event_uuid === undefined) {
        res.send({
            status: false,
            msg: 'Invalid argument',
        });
        return
    }

    var event_uuid = req.body.event_uuid;
    Event.find({event_uuid: event_uuid}, function (err, event) {
        if(err){
            res.send({
                status: false,
                msg: 'Internal error'
            });
        } else if(event === undefined){
            res.send({
                status: false,
                msg: 'Event does not exist'
            });
        } else {
            UserLocation.find({event_uuid: event_uuid},function (err, userLocations) {
                if(err){
                    res.send({
                        status: false,
                        msg: 'Internal error'
                    });
                } else {
                    res.send({
                        status: true,
                        value: {
                            userLocations: userLocations
                        }
                    })
                }
            })
        }
    })
    // event_uuid
    // query all userLocation has event_uuid
});

module.exports = router;