
var DepartmentData = require('../data/departmentData')
var lib = require('../utils/util')
module.exports = {
  loginPage: (req, res, next) => {
    res.render('index', { title: 'Express' });
  },
  logout: (req, res, next) => {
    req.session.destroy();
    res.redirect('/')
  }
  ,
  validateLogin: async (req, res, next) => {
    const department = await DepartmentData.findOneDepartment({ user_name: req.body.user_name, password_hash: lib.password_hash(req.body.password) }, { user_name: 1, user_type: 1 })
    if (!department) { return res.redirect('/'); }
    req.session.department = department
    switch (department.user_type) {
      case 'admin': res.redirect('/admin'); break;
      case 'department': res.redirect('/department'); break;
    }
  }
}