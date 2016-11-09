/**
 * Created by admin on 2016/11/8.
 */
var mongodb= require('./db');
var Schema = mongodb.mongoose.Schema;

var userSchema = new Schema({
    username  : { type:String },
    password:{type:String},
    date : {type: Date, default: Date.now}
});

var User = mongodb.mongoose.model("user", userSchema);

//var testEntity = new User({    name: "funtest",password:'123'});testEntity.save(function (error, doc){    if(error){        console.log("error: "+error);    }else{        console.log('save',doc);    }});

module.exports=User;