var Schema = require('mongoose').Schema
var db = require('../config/db')
var applicationSchema = new Schema({
    name: {type: String,required: true},
    description:{type:String,required:true},
    created_at:{type:Date},
    follow_up_detail:[{}],
    late_date_to_response:{type:Date},
    current_open:{type:Boolean},
    case_close:{type:String} // closing discription
})
module.exports=db.model('Application',applicationSchema)