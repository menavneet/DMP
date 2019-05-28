var DepartmentData = require('../data/departmentData');
var ApplicationData = require('../data/applicationData');
var lib = require('../utils/util');

module.exports = {
    indexPage: async (req, res, next) => {
        const applications = await ApplicationData.getAllApplication()
        res.render('./admin/index', { applications: applications });
    },
    showApplicationById: async (req, res, next) => {
        const application = await ApplicationData.getApplicationById(req.query.id);
        res.render('./admin/application', { application: application })
    },
    newApplicationForm: async (req, res, next) => {
        const departments = await DepartmentData.allDepartmentName();
        res.render('./admin/newApplicationForm', { departments: departments })

    },
    saveNewApplicationFrom: async (req, res, next) => {
        const name = req.body.name;
        const description = req.body.description;
        const department_id = req.body.department_id;
        const created_by = (req.session && req.department && req.session.department.name) || 'Admin';
        if (name && description && department_id && created_by) {
            const application = {
                'name': name,
                'description': description,
                'department_id': department_id,
                'created_by': created_by
            };
        const result  = await ApplicationData.addNewApplication(application)
        console.log(result)
        }
        res.redirect('/admin')
    },
    newDepartmentForm: (req, res, next) => {
        res.render('./admin/newDepartmentForm');
    }
    ,
    saveNewDepartmentForm: async (req, res, next) => {
        const name = req.body.name;
        const phone = req.body.phone;
        const user_type = req.body.user_type;
        const email = req.body.email;
        const user_name = lib.getUserName(req.body.phone)
        if (name && phone && user_type && email && user_name) {
            const data = {
                'name': name,
                'phone': phone,
                'user_type': user_type,
                'email': email,
                'user_name': user_name,
                'password_hash': lib.password_hash(lib.getPassword())
            }
            await DepartmentData.addNewDepartment(data)
        }
        res.redirect('/admin')
    },

}