const { AddressModel } = require("../model/address");
const { setAddress } = require("../helpers/initGlobal");

exports.currentAddress = async (req, res, next) => {
  try {
    const addressArr = await AddressModel.find();
    // const address = addressArr.map((el) => ({ address: el.address }));
    return res.status(200).send(addressArr);
  } catch (error) {
    next(error);
  }
};

exports.refreshAddress = async (req, res, next) => {
  try {
    const address = req.body;
    //todo del -> update
    await AddressModel.deleteMany();
    const newAddress = await AddressModel.create(address);
    setAddress(newAddress.address);
    return res.status(201).send(newAddress);
  } catch (error) {
    next(error);
  }
};
