import _repositoryUser from "../Databases/Repository/User.repository";
import dataFormat from "../DTO/nextRequest";
exports.get = async (request, response, next) => {
  try {

    const {payload:{data:{id}}}=request ;
    const user = await _repositoryUser.getUserById(id)
    if (!user||user==null) {
      request.data = dataFormat(404, false, "Account not found.");

      next();
    }
   
    request.data = dataFormat(200, true, "Fetched Account details", user);

    next();
  } catch (error) {
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.update = async (request, response, next) => {
  try {
    let { body } = request;
    const user = await _repositoryUser.updateUser(body);

    request.data = dataFormat(201, true, "Account details updated");
    next();
  } catch (error) {
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.terminate = (request, response) => {};
