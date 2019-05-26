var Department=require('../models/Department')
var lib=require('../utils/util')
module.exports = {
  loginPage: (req, res, next) => {
    res.render('index', { title: 'Express' });
  },
  validateLogin: (req, res, next) => {
    Department.findOne({
      user_name: req.body.user_name,
      password_hash: lib.password_hash(req.body.password)
    }, { user_name: 1, user_type: 1 }, (err, department) => {
      if (department == null) res.redirect('/')
      req.session.department = department
      switch (department.user_type) {
        case 'admin':
          res.redirect('/admin')
          break;
        case 'department':
          res.redirect('/department')
          break;
        default:
          res.redirect('/')
          break;
      }
    })
  }
}