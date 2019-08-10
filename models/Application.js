var Schema = require('mongoose').Schema
var db = require('../config/db')
var applicationSchema = new Schema({
    name:           { type: String, required: true },
    description:    { type: String, required: true },
    department_id:  { type: Schema.Types.ObjectId, ref: 'Department' },
    created_at:     { type: Date, default: Date.now() },
    follow_up_detail: [{
        detail:     { type: String },
        status:     { type: String },
        deadline:   { type: Date }
    }],
    late_date_to_response: { type: Date, default: Date.now() + 36000 },
    current_status: { type: String },
    case_close: { type: Boolean, default: false },// closing discription
})
module.exports = db.model('Application', applicationSchema)