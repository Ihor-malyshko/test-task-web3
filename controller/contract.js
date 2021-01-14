const { ContractModel } = require("../model/contract");
const { getTopToken } = require("../helpers/getTopToken");
const { initAddressContract } = require("../helpers/initGlobal");

// exports.currentContract = async (req, res, next) => {
//   try {
//     const contract = await ContractModel.find();
//     const contractAddress = contract.map((el) => el.contractAddress);
//     return res.status(200).send(contractAddress);
//   } catch (error) {
//     next(error);
//   }
// };

exports.refreshContract = async (req, res, next) => {
  try {
    const data = await getTopToken();
    //todo del -> update
    await ContractModel.deleteMany();
    await ContractModel.create(data);
    await initAddressContract();
    return res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
