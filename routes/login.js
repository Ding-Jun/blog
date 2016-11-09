/**
 * Created by admin on 2016/11/8.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.render('login',{title:'登录'});
});
router.post('/',require('../controller/userController').login)
module.exports = router;