var express = require('express');
var router = express.Router();
var Department=require('../models/Department')
var Application=require('../models/Application')
var lib=require('../library/lib')

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

router.post('/login',(req,res,next)=>{
  Department.findOne({
    user_name:req.body.user_name,
    password_hash:lib.password_hash(req.body.password)
  },{user_name:1,user_type:1},(err,department)=>{
    if(department==null) res.redirect('/')
    req.session.department=department
    // console.log(department)
    switch (department.user_type) {
      case 'admin':
        res.redirect('/admin')
        break;
      case 'department':
        res.redirect('/department')
      default:
        res.redirect('/')
        break;
    }
  })
});


router.get('/department',(req,res,next)=>{
  Application.find({},(err,applications)=>{
    res.render('./department/index',{applications:applications,name:'Department Name'})
  })
});

router.post('/department',(req,res,next)=>{
  const name=req.body.name;
  const description=req.body.description;
});

router.get('/department/application',(req,res,next)=>{
  Application.findById(req.query.id,(err,application)=>{
    if (err) throw err
    res.render('./department/application',{application:application})
  })  //Dummy
})

router.post('/department/addFollowUpDetail',(req,res,next)=>{
  Application.findByIdAndUpdate(req.body.application_id||0,{$push:{
    follow_up_detail:req.body.follow_up_detail
  }},(err,updated)=>{
    if(err) throw err
    console.log(updated)
    res.redirect('/department')
  })
})

router.get('/admin',(req,res,next)=>{
  Application.find({},(err,applications)=>{
    res.render('./admin/index',{applications:applications});
  });
});

router.get('/admin/application',(req,res,next)=>{
  Application.findById(req.query.id,(err,application)=>{
    if (err) throw err
    res.render('./admin/application',{application:application})
  })  //Dummy
})

router.get('/admin/newApplication',(req,res,next)=>{
  Department.find({},{name:1},(err,departments)=>{
    res.render('./admin/newApplicationForm',{departments:departments});
  })
})

//final
router.post('/admin/newApplication',(req,res,next)=>{
  Application.create({
    name:req.body.name,
    description:req.body.description,
    department_id:req.body.department_id,
  },(err,application)=>{
    console.log(err)
    console.log(application)
    application.save();
    res.redirect('/admin')
  })
})

//final
router.get('/admin/newDepartmentForm',(req,res,next)=>{
  res.render('./admin/newDepartmentForm');
});
//final
router.post('/admin/newDepartmentForm',(req,res,next)=>{
Department.create({
   name:req.body.name,
   phone:req.body.phone,
   user_type:req.body.user_type,
   email:req.body.email,
   user_name:lib.getUserName(req.body.phone),
   password_hash:lib.password_hash(lib.getPassword())
 },(err,r)=>{
   r.save();
   res.redirect('/')
 })
});

router.get('/superadmin/newUser',(req,res,next)=>{
  res.render('./superadmin/newUser')
})

module.exports = router;
