import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        name: {
          type: String,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        shippingAdress: {
          adress: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          postalCode: {
            type: String,
            required: true,
          },
          country: {
            type: String,
            required: true,
          },
        },
        paymentMethod: {
          type: String,
          required: true,
        },
        paymentResult: {
          type: String,
          required: true,
        },
        paymentMethod: {
          type: String,
          required: true,
        },
      },
    ],
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export const Order = new mongoose.model("Order", orderSchema);
