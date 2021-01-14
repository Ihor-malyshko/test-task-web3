global.address = "";

const { AddressModel } = require("../model/address");
exports.initAddress = async () => {
  const address = await AddressModel.find();
  global.address = address[0].address;
};

exports.setAddress = async (address) => {
  global.address = address;
};

global.addressContract = [];

const { ContractModel } = require("../model/contract");
exports.initAddressContract = async () => {
  const address = await ContractModel.find();
  global.addressContract = address.map((el) => el.address);
};

exports.setAddressContract = async (address) => {
  global.addressContract = address;
};
