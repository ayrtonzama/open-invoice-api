const { default: ProjectModel } = require("../Databases/Models/Project.model")

exports.createProject=async(body)=>{
    try {
        const createProject=await ProjectModel.create(body)
        return createProject
    } catch (error) {
        throw error
    }
}

exports.getAll=async(organisation_id,params)=>{

}