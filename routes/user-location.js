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

    var title = req.body.title;
    var uuid = uuidService.newUuid();
    var url = config.host + '/event/' + uuid;
    
    var newEvent = new Event();
    newEvent.title = "test";
    newEvent.title = title;
    newEvent.uuid = uuid;

    newEvent.save(function (err) {
        if (err) {
            console.log(err);
            res.send({
                status: false,
                msg: 'Internal error',
            });
        } else {
            res.send({
                status: true,
                msg: '',
                value: {
                    url: url
                }
            })
        }
    });
});

router.post('/userLocations/', function (req, res) {

    Event.find({_id: req.params.id}, function (err, event) {
        if(err || event == undefined){
            console.log("Event does not exist");
        } else {
            UserLocation.findAll({event_uuid: event},function (err, location) {
                if(err){
                    console.log("no user location found")
                } else {

                    var model = {
                        status: true,
                        msg: "Locations",
                        value: {
                            users: location
                        }
                    }
                }

            })

        }
        
    })
    // event_uuid

    // query all userLocation has event_uuid
});

module.exports = router;