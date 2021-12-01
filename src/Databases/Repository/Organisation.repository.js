const { default: OrganisationModel } = require("../Models/Organisation.model");

exports.createOrganisation = async(body) => {
  try {
    const organisation = await OrganisationModel.create(body);
    return organisation;
  } catch (error) {
    throw error;
  }
};

exports.findOrganisation = async (id) => {
  try {
    const organisation = await OrganisationModel.findById(id);
    return organisation;
  } catch (error) {
    throw error;
  }
};

exports.updateOrganisation = async (id, body) => {
  try {
    const organisation = await OrganisationModel.updateOne(body);
    return organisation;
  } catch (error) {
    throw error;
  }
};

exports.removeOrganisation = async (id) => {
  try {
    await OrganisationModel.deleteOne(id);
  } catch (error) {
    throw error;
  }
};
