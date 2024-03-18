const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");
const {
  authMiddleware,
  authUserMiddleware,
} = require("../middleware/authMiddleware");

router.post("/sign-up", UserController.CreateUser);
router.post("/sign-in", UserController.loginUser);
router.put("/update-user/:id", UserController.updateUser);
router.delete("/delete-user/:id", authMiddleware, UserController.deleteUser);
router.get("/getAll", authMiddleware, UserController.getAllUsers);
router.get("/get-details/:id", authUserMiddleware, UserController.getDetails);
router.post("/refresh-token", UserController.refreshToken);

module.exports = router;
