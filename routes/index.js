var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    res.render('index', { title: 'HOME' ,username:req.session.user.username});
  }else{
    res.redirect('login')
  }

});

module.exports = router;
