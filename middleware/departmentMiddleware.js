module.exports={
    validate:(req,res,next)=>{
        // if(req.session.department==undefined || req.session.department.user_type !='department')
        // {res.redirect('/') }
        // else
        next();
    }
}