const { default: UserModel } = require("../Models/User.model")

exports.getUserByEmail=async(email)=>{
    try {
        const user=await UserModel.findOne({email:email})
        return user
    } catch (error) {
        throw new error
    }
}

exports.getUserById=async(id)=>{
    try {
        const user=await UserModel.findById(id)
        return user
    } catch (error) {
        throw new error
    }
}

exports.createUser=async(body)=>{
    try {
    
        const created=await UserModel.create(body)
        return created;
    } catch (error) {
        throw new error
    }
}

exports.updateUser=async(id,body)=>{
    try {

        const updated=await UserModel.updateOne(body)
        return updated
    } catch (error) {
        throw new error
    }
}

exports.deleteUser=async(id)=>{
    try {
        await UserModel.deleteOne(id)
    } catch (error) {
        throw new error
    }
}