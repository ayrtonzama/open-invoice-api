import mongoose, { Schema } from 'mongoose';
import UserProjectModel from './UserProject.model';
class Shift extends mongoose.Schema{
constructor(){
    const shift = super({
        user_project:{
            type:Schema.Types.ObjectId,
            ref:UserProjectModel,
            required:true,
        },
        time:{
            type:Schema.Types.String,
            required:true
            
        }
    })
    return shift
}
}

export default mongoose.model("Shift",new Shift())