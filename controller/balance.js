const {
  getBalanceAll,
  getERC20Balance,
  isAddress,
} = require("../helpers/web3-helper");
const { BalanceModel } = require("../model/balance");
const { addressContract } = require("../helpers/addressContract");
const { setBalances } = require("../helpers/setBalances");

exports.getBalanceEthereum = async (req, res, next) => {
  try {
    const balanse = await getBalanceAll(global.address);
    const data = { balanse_Ethereum: balanse };
    return res.status(200).send(data);
  } catch (error) {
    next(err);
  }
};

exports.getBalanceByAddress = async (req, res, next) => {
  try {
    const contractAddress = req.params.address;
    // isAddress(contractAddress);
    if (!isAddress(contractAddress)) {
      return res.status(400).send("not a address");
    }

    const data = await getERC20Balance(global.address, contractAddress);
    return res.status(200).send(data);
  } catch (error) {
    next(err);
  }
};

exports.getBalances = async (req, res, next) => {
  try {
    const balances = await setBalances();
    return res.status(200).send(balances);
  } catch (error) {
    next(error);
  }
};
