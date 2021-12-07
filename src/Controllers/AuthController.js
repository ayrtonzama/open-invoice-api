import {
  verifyPassword,
  signJwt,
  generatePassword,
} from "../Services/Encryption";
import _repositoryUser from "../Databases/Repository/User.repository";
import dataFormat from "../DTO/nextRequest";
exports.login = async (request, response, next) => {
  try {
    const { body } = request;
    const user = await _repositoryUser.getUserByEmail(body.email);
    if (!user || !verifyPassword(body.password, user.password)) {
      request.data = dataFormat(401, false, "Unauthorized");
      next();
    }

    const data = {
      token: await signJwt({
        id: user.id,
        role: user.role,
        organisation_id: user.organisation_id,
      }),
      role: user.role,
    };
    request.data = dataFormat(200, true, "Successfully signed in user", data);
    next();
  } catch (error) {
    request.data = dataFormat(401, false, "Unauthorized");
    next();
  }
};

exports.signUpUser = async (request, response, next) => {
  try {
    const {
      body,
      payload: {
        data: { organisation_id },
      },
    } = request;
    const user_password = await generatePassword();

    let userBody = {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      pay_rate: body.pay_rate,
      organisation_id: organisation_id,
    };
    await _repositoryUser.createUser(userBody, user_password, body.role);
    request.data = dataFormat(200, true, "User is now registered");

    next();
  } catch (error) {
    console.log(error);
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

// auth
