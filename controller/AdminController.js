var Application = require('../models/Application');
var Department = require('../models/Department')

module.exports = {
    indexPage: (req, res, next) => {
        Application.find({}, (err, applications) => {
            res.render('./admin/index', { applications: applications });
        });
    },
    showApplicationById: (req, res, next) => {
        Application.findById(req.query.id, (err, application) => {
            if (err) throw err
            res.render('./admin/application', { application: application })
        })
    },
    newApplicationForm: (req, res, next) => {
        Department.find({ user_type: 'department' }, { name: 1 }, (err, departments) => {
            res.render('./admin/newApplicationForm', { departments: departments });
        })
    },
    saveNewApplicationFrom: (req, res, next) => {
        Application.create({
            name: req.body.name,
            description: req.body.description,
            department_id: req.body.department_id,
        }, (err, application) => {
            console.log(err)
            console.log(application)
            application.save();
            res.redirect('/admin')
        })
    },
    newDepartmentForm: (req, res, next) => {
        res.render('./admin/newDepartmentForm');
    }
    ,
    saveNewDepartmentForm: (req, res, next) => {
        Department.create({
            name: req.body.name,
            phone: req.body.phone,
            user_type: req.body.user_type,
            email: req.body.email,
            user_name: lib.getUserName(req.body.phone),
            password_hash: lib.password_hash(lib.getPassword())
        }, (err, r) => {
            r.save();
            res.redirect('/')
        })
    },

}