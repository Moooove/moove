var express = require('express');
var uuidService = require('../services/uuid');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var uuid = uuidService.newUuid();
    res.render('index',{'uuid':uuid});
});


module.exports = router;