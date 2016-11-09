/**
 * Created by admin on 2016/11/8.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    req.session.user = null;
    res.redirect('login');
});

module.exports = router;