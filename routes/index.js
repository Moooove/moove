var express = require('express');

// services
var uuidService = require('../services/uuid');


var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index',{user_uuid : uuidService.newUuid()});
});


module.exports = router;