const { Router } = require("express");
const {
  getBalances,
  getBalanceEthereum,
  getBalanceByAddress,
} = require("../controller/balance");
const { refreshAddress, currentAddress } = require("../controller/address");
const { refreshContract } = require("../controller/contract");

const router = Router();

router.get("/balances", getBalances);
router.get("/balances/ethereum", getBalanceEthereum);

router.get("/balances/:address", getBalanceByAddress);

router.get("/address/current", currentAddress);
router.post("/address/refresh", refreshAddress);

router.get("/contracts/refresh", refreshContract);

exports.router = router;
