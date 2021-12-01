import OrganisationModel from '../Databases/Models/Organisation.model'
import _repositoryOrg from '../Databases/Repository/Organisation.repository'
// import 
exports.get = (request, response) => {
  try {
  } catch (error) {}
};

exports.create = async(request, response) => {
  const organisation=new OrganisationModel({
    name:request.body.name,
    description:request.body.description,
  })
  let createdOrg
  let createUser
  try {
   
    createdOrg=await _repositoryOrg.createOrganisation(organisation)
    response.status(201).send(created)
  } catch (error) {
    console.log(error)
    return response.status(500)
  }
  try {
    createUser=await _re
  } catch (error) {
    
  }

};

exports.update = (request, response) => {
  try {
  } catch (error) {}
};

exports.remove = (request, response) => {
  try {
  } catch (error) {}
};
