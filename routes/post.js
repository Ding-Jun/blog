/**
 * Created by admin on 2016/11/8.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.send('post get');
});

module.exports = router;