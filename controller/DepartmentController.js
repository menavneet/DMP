var ApplicationData = require('../data/applicationData')
module.exports = {
  indexPage: async (req, res, next) => {
    const applications = await ApplicationData.getAllApplication({ department_id: req.session.department._id })
    res.render('./department/index', { applications: applications, name: 'Department Name' })
  },

  showApplicationById: async (req, res, next) => {
    const application = await ApplicationData.getApplicationById(req.query.id)
    res.render('./department/application', { application: application })
  },

  addFollowUpDetail: async (req, res, next) => {
    const id = req.body.application_id || 0;
    const detail = req.body.detail
    const status = req.body.status
    const deadline = req.body.deadline
    console.log(req.body)
    if (id && detail && status && deadline) {
      console.log('updated')
      const update = { $push: {follow_up_detail:{ 'detail': detail, 'status': status, 'deadline': deadline }} };
      await ApplicationData.addFollowUpDetail(id, update);
    }
    res.redirect('/department')
  },



}