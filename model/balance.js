const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema({
  balances: [
    {
      name: { type: String, required: true },
      symbol: { type: String, required: true },
      balance: { type: String, required: true },
    },
  ],
  date: { type: Date },
});

exports.BalanceModel = mongoose.model("Balance", balanceSchema);
