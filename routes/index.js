var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/department',(req,res,next)=>{

  dummyData=[
    {_id:1,name:'Application 1',description:'Application 1 Description With Long Text ',created_at:Date.now(),created_by:'Dummy User',last_date_to_response:Date.now()},
    {_id:2,name:'Application 1',description:'Application 1 Description With Long Text ',created_at:Date.now(),created_by:'Dummy User',last_date_to_response:Date.now()},
    {_id:3,name:'Application 1',description:'Application 1 Description With Long Text ',created_at:Date.now(),created_by:'Dummy User',last_date_to_response:Date.now()},
    {_id:4,name:'Application 1',description:'Application 1 Description With Long Text ',created_at:Date.now(),created_by:'Dummy User',last_date_to_response:Date.now()}
  ]
  res.render('./department/index',{applications:dummyData,name:'Department Name'})
});

router.get('/department/application',(req,res,next)=>{
  var application={}
  application._id=req.query.id
  console.log('-------')
  res.render('./department/application',{application:application})
})

router.get('/admin',(req,res,next)=>{
  res.render('./admin/index');
});

router.get('/admin/newApplication',(req,res,next)=>{
  res.render('./admin/newApplicationForm');
})

module.exports = router;
