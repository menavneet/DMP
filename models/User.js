var Schema=require('mongoose').Schema
var db=require('../config/db')

var userSchema=new Schema({
    name:{type:String},
    phone:{type:String},
    type:{type:String},
    opt:{type:String},
    email:{type:String},
    devices:{type:String},
    created_at:{type:Date},
    updated_at:{type:Date},
    last_logged_in:{type:Date},
    password_hash:{type:String},
    user_name:{type:String}
})