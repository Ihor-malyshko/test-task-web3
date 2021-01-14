const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    address: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

exports.AddressModel = mongoose.model("Address", addressSchema);
