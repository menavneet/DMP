var Department=require('../models/Department')
module.exports={
    findOneDepartment:async (where={},projection={})=>{
        return await Department.findOne(where,projection)
    },
    allDepartmentName:async()=>{
        return await Department.find({ user_type: 'department' }, { name: 1 }).catch(()=>null)
    },
    addNewDepartment:async(data)=>{
        return await new Department(data).save()
    }

}