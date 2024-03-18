const Product = require("../Models/ProuctModel");

const CreateProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;
    try {
      const CheckProduct = await Product.findOne({ name: name });
      if (CheckProduct !== null) {
        resolve({
          status: "success",
          message: "The is name of product is really",
        });
      }

      const newProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (newProduct) {
        resolve({
          status: "OK",
          massage: "Successfully created",
          data: newProduct,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

//UpdateProduct
const UpdateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const CheckProduct = await Product.findOne({ _id: id });

      if (CheckProduct === null) {
        resolve({ status: "ok", massage: "The produc is not defined" });
      }
      const updatedProduct = await Product.findByIdAndUpdate(id, data, {
        new: true,
      });
      console.log(updatedProduct);
      resolve({
        status: "OK",
        massage: "Successfully created",
        data: updatedProduct,
      });
    } catch (error) {
      reject(error);
    }
  });
};

// get details of product
const getDetailsProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({ _id: id });

      if (product === null) {
        resolve({ status: "ok", massage: "The ProductID is not defined" });
      }

      resolve({
        status: "OK",
        massage: "successfully",
        data: product,
      });
    } catch (error) {
      reject(error);
    }
  });
};
//delete a product
const deleteProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const CheckProduct = await Product.findOne({ _id: id });

      if (CheckProduct === null) {
        resolve({ status: "ok", massage: "The ProductID is not defined" });
      }
      await Product.findByIdAndDelete(id);
      resolve({
        status: "OK",
        massage: "Delete product successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
};

//get all Product
const getAllProducts = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalProduct = await Product.countDocuments();
      let allProduct;

      if (sort) {
        const objectsSort = {};
        objectsSort[sort[1]] = sort[0];

        allProduct = await Product.find()
          .limit(limit)
          .skip(limit * page)
          .sort(objectsSort);
      } else if (filter) {
        const label = filter[0];
        allProduct = await Product.find({
          [label]: { $regex: filter[1] },
        })
          .limit(limit)
          .skip(page * limit)
          .sort({ createdAt: -1, updatedAt: -1 });
      } else {
        allProduct = await Product.find()
          .limit(limit)
          .skip(limit * page);
      }

      resolve({
        status: "OK",
        message: "Get All Product successfully",
        data: allProduct,
        total: totalProduct,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
      });
    } catch (error) {
      reject(error);
      console.error(error);
    }
  });
};
module.exports = {
  CreateProduct,
  UpdateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProducts,
};
