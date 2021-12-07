import mongoose, { Schema } from 'mongoose';
import ProjectModel from './Project.model';
import UserModel from './User.model';

class UserProject extends mongoose.Schema{
    constructor(){
        const userProject=super({
            user:{
                type:Schema.Types.ObjectId,
                ref:UserModel,
                required: true,
            },
            project:{
                type:Schema.Types.ObjectId,
                required: true,
                ref:ProjectModel
            }

        })
        return userProject
    }
}


export default mongoose.model("UserProject", new UserProject());
