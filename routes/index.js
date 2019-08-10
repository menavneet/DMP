var express = require('express');
var router = express.Router();

var MainController = require('../controller/MainController')
var AdminController = require('../controller/AdminController')
var DepartmentController = require('../controller/DepartmentController')

var adminMiddleware = require('../middleware/adminMiddleware')
var departmentMiddleware = require('../middleware/departmentMiddleware')

router.get('/', MainController.loginPage);
router.get('/logout',MainController.logout);
router.post('/login',MainController.validateLogin);

router.get('/department', departmentMiddleware.validate, DepartmentController.indexPage);
router.get('/department/application', departmentMiddleware.validate, DepartmentController.showApplicationById);
router.post('/department/addFollowUpDetail', departmentMiddleware.validate, DepartmentController.addFollowUpDetail);

router.get('/admin', adminMiddleware.vaildate, AdminController.indexPage);
router.get('/admin/application', adminMiddleware.vaildate, AdminController.showApplicationById);
router.get('/admin/newApplication', adminMiddleware.vaildate, AdminController.newApplicationForm);
router.get('/admin/newDepartmentForm', adminMiddleware.vaildate, AdminController.newDepartmentForm);

router.post('/admin/newApplication', adminMiddleware.vaildate, AdminController.saveNewApplicationFrom)
router.post('/admin/newDepartmentForm', adminMiddleware.vaildate, AdminController.saveNewDepartmentForm);

module.exports = router;