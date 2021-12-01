import mongoose, { Schema } from "mongoose";

class Role extends mongoose.Schema {
  constructor() {
    const role = super({
      name: {
        required: true,
        type: String,
      },
    });
    return role;
  }
}

export default mongoose.model("Role", new Role());
