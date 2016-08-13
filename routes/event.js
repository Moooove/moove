var express = require('express');
// models
var Event = require('../models/event');

// services
var uuidService = require('../services/uuid');

var router = express.Router();
router.post('/event/new', function (req, res) {
    var title = req.body.title.trim();

    var newEvent = new Event();
    newEvent.title = title;

    newEvent.save(function (err) {
        if (err) {
            console.log('save error', err);
        } else {
            console.log(req.body.title + " event created");
        }
    });

    var uuid = uuidService.newUuid();
    res.send({'uuid':uuid});

});
router.get('/event/:id',function (req,res) {
    res.render('event');
});

module.exports = router;