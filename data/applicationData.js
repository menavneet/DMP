var Application=require('../models/Application')

module.exports={
    getAllApplication: async (where={})=>{
        return await Application.find(where);
    },
    getApplicationById: async (id)=>{
        const application= await Application.findById(id);
        return application;
    },
    addNewApplication:async (application)=>{
        return await new Application(application).save();
      
    },
    addFollowUpDetail:async (id,data)=>{
        const application=await Application.findByIdAndUpdate(id,data);
        console.log(application)
    }
}