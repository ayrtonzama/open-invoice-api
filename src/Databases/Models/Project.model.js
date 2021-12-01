import mongoose, { Schema } from "mongoose";
import OrganisationModel from "./Organisation.model";
class Project extends mongoose.Schema {
  constructor() {
    const project = super({
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      start_date: {
        type: Date,
        required: true,
      },
      organisation_id: {
        type: Schema.Types.ObjectId,
        ref: "Organisation",
      },
    });
    return project;
  }
}

export default mongoose.model("Project", new Project());
