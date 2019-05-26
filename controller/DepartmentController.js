var Application = require('../models/Application')
module.exports = {
    indexPage: (req, res, next) => {
        Application.find({ department_id: req.session.department._id }, (err, applications) => {
            console.log('hello')
            res.render('./department/index', { applications: applications, name: 'Department Name' })
        })
    },
    showApplicationById: (req, res, nexts) => {
        Application.findById(req.query.id, (err, application) => {
            if (err) throw err
            res.render('./department/application', { application: application })
        })
    },
    addFollowUpDetail:(req,res,next)=>{
        Application.findByIdAndUpdate(req.body.application_id || 0, {
            $push: {
              follow_up_detail: req.body.follow_up_detail
            }
          }, (err, updated) => {
            if (err) throw err
            console.log(updated)
            res.redirect('/department')
          })
        },

    

}