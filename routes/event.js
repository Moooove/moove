var express = require('express');
// config
var config = require('../config')
// models
var Event = require('../models/event');

// services
var uuidService = require('../services/uuid');

var router = express.Router();
router.post('/event/new', function (req, res) {
    // validation
    if (req.body === undefined && req.body.title === undefined) {
        res.send({
            status: false,
            msg: 'Please enter the title.',
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
router.get('/event/:uuid',function (req,res) {
    Event.find({ uuid: req.params.uuid }, function (err, event) {
        if (err) {
            console.log(err)
            return console.error(err);
        } else {
            console.log(event);
            res.render('event');
        }
    });
});

router.get('/tracker', function (req,res) {
    res.render('tracker');
})
router.get('/mapbox',function (req,res) {
    res.render('mapBoxExample');
})

module.exports = router;