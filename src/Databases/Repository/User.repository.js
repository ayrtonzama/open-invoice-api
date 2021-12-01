const { default: UserModel } = require("../Models/User.model");
import { passwordHash } from "../../Services/Encryption";
exports.getUserByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ email: email });
    return user;
  } catch (error) {
    throw new error();
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    throw new error();
  }
};

exports.createUser = async (body, password, role) => {
  try {
   
    body.password = await passwordHash(password);
    body.role = role;
    const created = await UserModel.create(body);
    return created;
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async (id, body) => {
  try {
    const updated = await UserModel.updateOne(body);
    return updated;
  } catch (error) {
    throw new error();
  }
};

exports.deleteUser = async (id) => {
  try {
    await UserModel.deleteOne(id);
  } catch (error) {
    throw new error();
  }
};
