/**
 * Created by admin on 2016/11/8.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog");

mongoose.connection.on("error", function (error){
    console.log("连接数据库失败"+error);
});

mongoose.connection.on("open", function (){
    console.log("数据库连接成功！！！");
});



exports.mongoose = mongoose;

/*var settings=require('../settings'),
    Db=require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server=require('mongodb').server;

console.log("mongoddd",require('mongodb'))
module.exports=new Db(settings.db,new Server(settings.host,Connection.DEFAULT_PORT),{safe:true});*/