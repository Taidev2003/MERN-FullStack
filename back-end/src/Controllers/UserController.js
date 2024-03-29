const UserService = require("../Services/UserService");
const JWTService = require("../Services/JwtService");

const CreateUser = async (req, res) => {
  try {
    const { email, password, confirmpassword } = req.body;

    const rexge = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const isCheckEmail = rexge.test(email);

    if (!email || !password || !confirmpassword) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "The input required" });
    } else if (!isCheckEmail) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "Invalid email format" });
    } else if (password !== confirmpassword) {
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
    const { email, password } = req.body;

    const rexge = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const isCheckEmail = rexge.test(email);

    if (!email || !password) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "All fields are required" });
    } else if (!isCheckEmail) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "Invalid email format" });
    }

    const respone = await UserService.loginUser(req.body);
    const { refresh_token, ...newReponse } = respone;
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    return res.status(200).json(newReponse);
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
        status: "ERROR",
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

    if (!userID) {
      return res.status(200).json({
        status: "ERROR",
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
        status: "ERROR",
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
  console.log("req.cookies.refresh_token", req.cookies.refresh_token);
  try {
    const token = req.cookies.refresh_token;

    if (!token) {
      return res.status(200).json({
        status: "ERROR",
        message: "The user is not requried",
      });
    }
    const respone = await JWTService.refreshTokenService(token);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};

//logout User
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({
      status: "success",
      message: "User logged out successfully",
    });
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
  logoutUser,
};
