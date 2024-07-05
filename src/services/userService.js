import User from "../models/user.js";

const createUser = async (data) => {
  const user = new User(data);
  await user.save();
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ Email: email });
  return user;
}


export default { createUser, getUserByEmail };
