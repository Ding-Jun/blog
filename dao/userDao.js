/**
 * Created by admin on 2016/11/9.
 */
var User = require("../models/user");

var userDAO = function (){};

userDAO.prototype = {
    //增
    save: function (json, callBack){
        var newUser = new User(json);

        newUser.save(function (err){
            callBack(err);
        });
    },
    //删
    remove: function (json, callBack){
        User.remove(json, function (err){
            callBack(err);
        });
    },
    //改
    update: function (json, condition, callBack){
        User.update(json, condition, function (err){
            callBack(err);
        });
    },
    //查
    findByName: function (name, callBack){
        User.findOne({username:name}, function (error, doc){
            if(error){
                console.log("error: "+error);
            }else{
                console.log('result',doc);
                callBack(error, doc);
            }
        });
    }
};

module.exports = new userDAO();