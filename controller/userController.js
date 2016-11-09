var userDao=require('../dao/userDao');
exports.register = function (req, res){
    userDao.findByName(req.body.username, function (err, doc){
        if(!err){
            if(!doc){
                var newUser = {username: req.body.username, password: req.body.password};
                userDao.save(newUser, function (err){
                    if(!err){
                        res.send({
                            code: 200,
                            msg: "注册成功！（本条消息来自后台）"
                        });
                    }
                });
            }else{
                res.send({
                    code: 201,
                    msg: "次用户名已被占用！（本条消息来自后台）"
                });
            }
        }
    });
};

exports.login=function (req, res, next) {
    userDao.findByName(req.body.username,function (err,doc) {
        if(!err){
            if(doc){
                if(doc.password == req.body.password){
                    var user = {
                        username: req.body.username,
                        password: req.body.password
                    };
                    req.session.user = user;
                    res.render('home',{title:'login success',username:req.body.username})
                }else {
                    res.send({
                        code: 200,
                        msg: "password not correct！（本条消息来自后台）"
                    });
                }

            }else {
                res.send({
                    code: 202,
                    msg: "用户not exists！（本条消息来自后台）"
                });
            }
        }
    })
}