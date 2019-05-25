var Schema = require('mongoose').Schema
var db = require('../config/db')
var applicationSchema = new Schema({
    name: {type: String,required: true},
    description:{type:String,required:true},
    department_id:{type:Schema.Types.ObjectId,ref:'Department'},
    created_at:{type:Date,default:Date.now()},
    follow_up_detail:[{type:String}],
    late_date_to_response:{type:Date},
    current_open:{type:Boolean,default:true},
    case_close:{type:String} // closing discription
})
module.exports=db.model('Application',applicationSchema)