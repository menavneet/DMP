var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/department',(req,res,next)=>{
  res.render('./department/index')
});



router.get('/admin',(req,res,next)=>{
  res.render('./admin/index');
});

router.get('/admin/newApplication',(req,res,next)=>{
  res.render('./admin/newApplicationForm');
})

module.exports = router;
