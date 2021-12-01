import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import regeneratorRuntime from "regenerator-runtime";
exports.passwordHash = async (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

exports.verifyPassword = (password, verify_password) => {
  try {
    return bcrypt.compareSync(password, verify_password);
  } catch (error) {
    return false;
  }
};

exports.signJwt=async(data,expires='1h')=>{
  try{

    let token= jwt.sign({
      data: data
    }, process.env.JWT_PASSWORD, { expiresIn: expires});

    return token
  }catch(err){
    throw err;
  }
  
}
