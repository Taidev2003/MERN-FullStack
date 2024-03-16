const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema(
  {
    OrderItem: [
      {
        name: { type: Stirng, required: true },
        amount: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Scheme.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    ShippingAddress: {
      fullname: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      phone: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    ShippingPrice: { type: Number, required: true },
    taxiPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, required: true },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    delivereaAt: { type: Date },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderScheme);
module.exports = Order;
