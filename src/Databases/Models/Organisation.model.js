import mongoose, { Schema } from "mongoose";
import ProjectModel from "./Project.model";
import UserModel from "./User.model";
class Organisation extends mongoose.Schema {
  constructor() {
    const organisation = super({
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      users: {
        type: [Schema.Types.ObjectId],
        ref: UserModel,
      },
      projects:{
          type:[Schema.Types.ObjectId],
          ref:ProjectModel
      }
    });
    return organisation;
  }
}

export default mongoose.model("Organisation", new Organisation());
