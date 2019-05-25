var express = require('express');
var router = express.Router();

/* GET home page. */


// '/'
// '/department' index
// '/department/application'
// '/admin' index 
// '/admin/newApplication'
// '/admin/newDepartment      User mean Department

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

router.post('/department',(req,res,next)=>{
  const name=req.body.name;
  const description=req.body.description;
});

router.get('/department/application',(req,res,next)=>{
  var application={}            //Dummy
  application._id=req.query.id  //Dummy
  res.render('./department/application',{application:application})
})

router.get('/admin',(req,res,next)=>{
  res.render('./admin/index');
});

router.get('/admin/newApplication',(req,res,next)=>{
  res.render('./admin/newApplicationForm');
})
router.get('/admin/newDepartmentForm',(req,res,next)=>{
  res.render('./admin/newDepartmentForm');
});

router.get('/superadmin/newUser',(req,res,next)=>{
  res.render('./superadmin/newUser')
})

module.exports = router;
