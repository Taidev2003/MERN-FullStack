const UserService = require("../Services/UserService");
const JWTService = require("../Services/JwtService");

const CreateUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;

    const rexge = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const isCheckEmail = rexge.test(email);

    if (!name || !email || !password || !confirmPassword || !phone) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "All fields are required" });
    } else if (!isCheckEmail) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "Invalid email format" });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERROR",
        message: "Password and ConfirmPassword must match",
      });
    }

    const respone = await UserService.CreateUser(req.body);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};

//loginuser
const loginUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone } = req.body;

    const rexge = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const isCheckEmail = rexge.test(email);

    if (!name || !email || !password || !confirmPassword || !phone) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "All fields are required" });
    } else if (!isCheckEmail) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "Invalid email format" });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERROR",
        message: "Password and ConfirmPassword must match",
      });
    }

    const respone = await UserService.loginUser(req.body);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
//updateUser
const updateUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const data = req.body;
    if (!userID) {
      return res.status(200).json({
        status: "error",
        message: "The user is not requried",
      });
    }
    const respone = await UserService.updateUser(userID, data);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const token = req.headers;
    console.log(token);
    console.log(userID);
    if (!userID) {
      return res.status(200).json({
        status: "error",
        message: "The user is not requried",
      });
    }
    const respone = await UserService.deleteUser(userID);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};

//get all users
const getAllUsers = async (req, res) => {
  try {
    const respone = await UserService.getAllUsers();

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
//get details of user
const getDetails = async (req, res) => {
  try {
    const userID = req.params.id;

    if (!userID) {
      return res.status(200).json({
        status: "error",
        message: "The user is not requried",
      });
    }
    const respone = await UserService.getDetails(userID);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
//refresh token

const refreshToken = async (req, res) => {
  try {
    const token = req.headers.token.split(" ")[1];

    if (!token) {
      return res.status(200).json({
        status: "error",
        message: "The user is not requried",
      });
    }
    const respone = await JWTService.refreshTokenService(token);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
module.exports = {
  CreateUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getDetails,
  refreshToken,
};
