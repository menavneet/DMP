module.exports={
    vaildate:(req,res,next)=>{
        // if(req.session.department==undefined || req.session.department.user_type !='admin')
        // {res.redirect('/') }
        // else
        next(); 
    }
}