const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    cart: [
      {
        productName: {
           type: String, 
           require: true
           },
        image: {
           type: String,
            require: true 
          },
        price: {
           type: Number, 
           require: true
           },
        qty: {
           type: Number
           },
      },
    ],
    purchase: {
      type: Array,
      require: true,
    },
    wishlist: {
      type: Array,
      require: true,
    },
  },
  { timestamps:true }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel;
