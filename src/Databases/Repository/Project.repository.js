const { default: ProjectModel } = require("../Models/Project.model.js");

exports.createPoject = async (body) => {
  try {
      const project=await ProjectModel.create(body);
      return project
  } catch (error) {
    throw error;
  }
};

exports.findProject = async (id,organisation_id) => {
  try {

      const project=await ProjectModel.findOne({where:{_id:id,organisation_id}})
      return project;
  } catch (error) {
    throw error;
  }
};

exports.getProjects = async (organisation_id) => {
  try {

    const projects=await ProjectModel.find({where:{organisation_id:organisation_id}})
    return projects
  } catch (error) {
    throw error;
  }
};

exports.deleteProjects = async (id,organisation_id) => {
  await ProjectModel.deleteOne({where:{_id:id,organisation_id}})
  try {
  } catch (error) {
    throw error;
  }
};

exports.updateProject = async (id, body) => {
  try {
  } catch (error) {
    throw error;
  }
};
