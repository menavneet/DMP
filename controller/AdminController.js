var Application = require('../models/Application');
var Department = require('../models/Department');
var DepartmentData =require('../data/departmentData');
var ApplicationData = require('../data/applicationData');
var lib=require('../utils/util');

module.exports = {
    indexPage:async (req, res, next) => {
        const applications= await ApplicationData.getAllApplication()
        res.render('./admin/index', { applications: applications });
    },
    showApplicationById:async (req, res, next) => {
        const application=await ApplicationData.getApplicationById(req.query.id);
        res.render('./admin/application', { application: application })
    },
    newApplicationForm:async (req, res, next) => {
        const departments= await DepartmentData.allDepartmentName();
        res.render('./admin/newApplicationForm', { departments: departments })
    
    },
    saveNewApplicationFrom:async (req, res, next) => {
        const application={
        name: req.body.name,
        description: req.body.description,
        department_id: req.body.department_id}
        await ApplicationData.addNewApplication(application)
        res.redirect('/admin')
    },
    newDepartmentForm: (req, res, next) => {
        res.render('./admin/newDepartmentForm');
    }
    ,
    saveNewDepartmentForm:async (req, res, next) => {
        const data={
        name: req.body.name,
        phone: req.body.phone,
        user_type: req.body.user_type,
        email: req.body.email,
        user_name: lib.getUserName(req.body.phone),
        password_hash: lib.password_hash(lib.getPassword())
        }
        const department=await DepartmentData.addNewDepartment(data)
        res.redirect('/admin')
    },

}