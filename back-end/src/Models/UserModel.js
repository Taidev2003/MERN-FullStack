const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    phone: { type: Number },
  },
  {
    timestamps: true,
    collection: "Users", // Xác định tên collection
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
