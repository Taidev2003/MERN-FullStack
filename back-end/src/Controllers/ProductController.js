const ProductService = require("../Services/ProductService");
const CreateProduct = async (req, res) => {
  try {
    const { name, image, type, price, countInStock, rating, description } =
      req.body;

    if (!name || !image || !type || !price || !countInStock || !rating) {
      return res
        .status(200)
        .json({ status: "ERROR", message: "All fields are required" });
    }

    const response = await ProductService.CreateProduct(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
//update
const UpdateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const data = req.body;
    console.log(productID);
    if (!productID) {
      return res.status(200).json({
        status: "error",
        message: "The productID not requried",
      });
    }
    const respone = await ProductService.UpdateProduct(productID, data);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
//get details of product
const getDetailsProduct = async (req, res) => {
  try {
    const productID = req.params.id;

    if (!productID) {
      return res.status(200).json({
        status: "error",
        message: "The product is not requried",
      });
    }
    const respone = await ProductService.getDetailsProduct(productID);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
//delete a product
const deleteProduct = async (req, res) => {
  try {
    const ProductId = req.params.id;

    if (!ProductId) {
      return res.status(200).json({
        status: "error",
        message: "The product is not requried",
      });
    }
    const respone = await ProductService.deleteProduct(ProductId);

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};

//get all product
const getAllProducts = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await ProductService.getAllProducts(
      Number(limit),
      Number(page),
      sort,
      filter
    );

    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({ massage: error });
  }
};
module.exports = {
  CreateProduct,
  UpdateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProducts,
};
