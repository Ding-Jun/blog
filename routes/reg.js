/**
 * Created by admin on 2016/11/8.
 */
var express = require('express');
var router = express.Router();


var crypto = require('crypto')
var register = require('../controller/userController').register;

router.post('/', register);
router.get('/',function (req, res, next) {
    res.render('reg',{title:'register'});
})
module.exports = router;
