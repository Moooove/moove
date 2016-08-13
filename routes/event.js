var express = require('express');
// services
var uuidService = require('../services/uuid');

var router = express.Router();
router.post('/event/new', function (req, res, next) {
    console.log(req.body);
    var uuid = uuidService.newUuid();
    res.send({'uuid':uuid});
});

module.exports = router;