import OrganisationModel from '../Databases/Models/Organisation.model'
import UserModel from '../Databases/Models/User.model'
import _repositoryOrg from '../Databases/Repository/Organisation.repository'
import _repositoryUser from '../Databases/Repository/User.repository'
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
 
  } catch (error) {
    
    return response.status(500)
  }
  try {
   
    let user={
      organisation_id:createdOrg._id,
      first_name:request.body.first_name,
      last_name:request.body.last_name,
      email:request.body.email
    }
    createUser=await _repositoryUser.createUser(user,request.body.password,"ADM")
    return response.status(201).send(createUser)
  } catch (error) {
   
    return response.status(500)
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
