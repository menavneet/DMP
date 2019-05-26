module.exports={
    vaildate:(req,res,next)=>{
        console.log('---------')
        console.log(req.session)
        next();
    }
}