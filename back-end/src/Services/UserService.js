const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralfreshToken } = require("./JwtService");

const CreateUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
    try {
      const checkUser = await User.findOne({ email: email });
      if (checkUser !== null) {
        resolve({ status: "success", message: "The is mail is really" });
      }
      const hash = bcrypt.hashSync(password, 10);
      const CreateUser = await User.create({
        name,
        email,
        password: hash,

        phone,
      });
      if (CreateUser) {
        resolve({
          status: "OK",
          massage: "Successfully created",
          data: CreateUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

//loginUser
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin;
    try {
      const checkUser = await User.findOne({ email: email });
      if (checkUser === null) {
        resolve({ status: "success", message: "The user is not defind" });
      }

      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({
          status: "OK",
          massage: "The Password or user is incorrect",
          data: CreateUser,
        });
      }
      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralfreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });
      resolve({
        status: "OK",
        massage: "Successfully created",
        access_token,
        refresh_token,
      });
    } catch (error) {
      reject(error);
    }
  });
};

//update User
const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      console.log(checkUser);

      if (checkUser === null) {
        resolve({ status: "ok", massage: "The user is not defined" });
      }
      const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
      console.log(updateUser);
      resolve({
        status: "OK",
        massage: "Successfully created",
        data: updateUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};

//delete a user
const deleteUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      console.log(checkUser);

      if (checkUser === null) {
        resolve({ status: "ok", massage: "The user is not defined" });
      }
      await User.findByIdAndDelete(id);
      resolve({
        status: "OK",
        massage: "Delete user successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
};
//get all users
const getAllUsers = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });

      const allUsers = await User.find();
      resolve({
        status: "OK",
        massage: "Get All User successfully",
        data: allUsers,
      });
    } catch (error) {
      reject(error);
    }
  });
};

// get details of user
const getDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ _id: id });

      if (user === null) {
        resolve({ status: "ok", massage: "The user is not defined" });
      }

      resolve({
        status: "OK",
        massage: "successfully",
        data: user,
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  CreateUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getDetails,
};
