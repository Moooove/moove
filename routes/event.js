var express = require('express');
var uuidService = require('../services/uuid');
var router = express.Router();

router.post('/event/new', function (req, res, next) {
    var uuid = uuidService.newUuid();
    res.send({'uuid':uuid});
});

module.exports = router;