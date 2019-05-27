var Application = require('../models/Application');
var ApplicationData = require('../data/applicationData')
module.exports = {
  indexPage: async (req, res, next) => {
    const applications = await ApplicationData.getAllApplication()
    res.render('./department/index', { applications: applications, name: 'Department Name' })
  },

  showApplicationById:async (req, res, nexts) => {
    const application = await ApplicationData.getApplicationById(req.query.id)
    res.render('./department/application', { application: application })
  },

  addFollowUpDetail:async (req, res, next) => {
    const id = req.body.application._id || 0;
    const update = { $push: { follow_up_detail: req.body.follow_up_detail } };
    const application = await ApplicationData.addFollowUpDetail(id, update);
    res.redirect('/department')
  },



}