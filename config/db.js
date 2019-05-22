var mongoose=require('mongoose')
var db=mongoose.createConnection('mongodb://localhost/dm')
module.exports=db;