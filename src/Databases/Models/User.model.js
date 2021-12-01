import mongoose, { Schema } from "mongoose";
// import OrganisationModel from "./Organisation.model";
// import RoleModel from "./Role.model";
class User extends mongoose.Schema {
  constructor() {
    const user = super({
      first_name: {
        required: true,
        type: String,
      },
      last_name: {
        required: true,
        type: String,
      },
      email: {
        required: true,
        type: String,
      },
      password: {
        required: true,
        type: String,
      },
      pay_rate: {
        type: Number,
      },
      organisation_id: {
        type: Schema.Types.ObjectId,
        ref: "Organisation",
      },
      role: {
        type: String,
        enum : ['EMP','ADM'],
        default:'EMP'
      },
    });
    return user;
  }
  
}

export default mongoose.model("User", new User());