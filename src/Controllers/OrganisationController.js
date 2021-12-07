import OrganisationModel from "../Databases/Models/Organisation.model";
import UserModel from "../Databases/Models/User.model";
import _repositoryOrg from "../Databases/Repository/Organisation.repository";
import _repositoryUser from "../Databases/Repository/User.repository";
import dataFormat from "../DTO/nextRequest";
exports.get = (request, response) => {
  try {
  } catch (error) {}
};

exports.create = async (request, response, next) => {
  const organisation = new OrganisationModel({
    name: request.body.name,
    description: request.body.description,
  });
  let createdOrg;
  let createUser;
  try {
    createdOrg = await _repositoryOrg.createOrganisation(organisation);
  } catch (error) {
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
  try {
    let user = {
      organisation_id: createdOrg._id,
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      email: request.body.email,
    };
    createUser = await _repositoryUser.createUser(
      user,
      request.body.password,
      "ADM"
    );
    request.data = dataFormat(201, true, "Organisation is registered");
    next();
  } catch (error) {
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.update = async(request, response,next) => {
  try {
  } catch (error) {}
};

exports.remove = (request, response) => {
  try {
  } catch (error) {}
};
