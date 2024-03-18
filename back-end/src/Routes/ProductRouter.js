const express = require("express");
const router = express.Router();

const {
  authMiddleware,
  authUserMiddleware,
} = require("../middleware/authMiddleware");
const ProductController = require("../Controllers/ProductController");

router.post("/create", ProductController.CreateProduct);
router.put("/update/:id", authMiddleware, ProductController.UpdateProduct);
router.get("/get-details/:id", ProductController.getDetailsProduct);
router.delete("/delete/:id", authMiddleware, ProductController.deleteProduct);
router.get("/get-all", ProductController.getAllProducts);

module.exports = router;
