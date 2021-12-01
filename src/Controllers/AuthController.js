import { verifyPassword, signJwt } from "../Services/Encryption";
import _repositoryUser from "../Databases/Repository/User.repository";
exports.login = async (request, response, next) => {
  try {
    const { body } = request;
    const user = await _repositoryUser.getUserByEmail(body.email);
    if (!user || !verifyPassword(body.password, user.password)) {
      request.info = 401;
      next();
    }

    request.info = 200;

    request.data = {
      token: await signJwt({
        id: user.id,
        role: user.role,
        organisation_id: user.organisation_id,
      }),
      role: user.role,
    };
    next();
  } catch (error) {
  
    request.info = 401;
    next();
  }
};

exports.signUpUser = (request, response) => {
  try {
  } catch (error) {}
};

// auth
