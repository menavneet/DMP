var Schema=require('mongoose').Schema
var db=require('../config/db')

var userSchema=new Schema({
    name:{type:String,required:true}, //
    phone:{type:String,required:true}, //
    user_type:{type:String}, // drop down
    opt:{type:String},
    email:{type:String,required:true}, //
    devices:[{type:String}],
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
    last_logged_in:{type:Date,default:Date.now()},
    last_logged_in_device:{type:String,default:'Gerenal Device'},
    password_hash:{type:String},
    user_name:{type:String}
})

module.exports=db.model('department',userSchema);