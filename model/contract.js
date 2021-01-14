const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  address: { type: String, required: true, unique: true },
});

exports.ContractModel = mongoose.model("Contract", contractSchema);
