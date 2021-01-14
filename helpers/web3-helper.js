const Web3 = require("web3");
const contractABI = require("./human_standard_token_abi");

web3 = new Web3(
  new Web3.providers.HttpProvider("https://main-rpc.linkpool.io")
);

// const address = "0xa145ac099e3d2e9781c9c848249e2e6b256b030d";

// const contractAddress = "0xbddab785b306bcd9fb056da189615cc8ece1d823";
// const contractAddress = "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c";

exports.getBalanceAll = async (address) => {
  try {
    const balance = await web3.eth.getBalance(address);
    const formatBalance = web3.utils.fromWei(balance);
    return formatBalance;
  } catch (error) {
    return "not valid address";
  }
};

exports.getERC20Balance = async (address, contractAddress) => {
  try {
    const tokenContract = new web3.eth.Contract(contractABI, contractAddress, {
      from: address,
    });

    const balance = await tokenContract.methods
      .balanceOf(address)
      .call()
      .then((res) => res);

    const name = await tokenContract.methods
      .name()
      .call()
      .then((res) => res);

    const symbol = await tokenContract.methods
      .symbol()
      .call()
      .then((res) => res);

    // const str = { balance: web3.utils.fromWei(balance), name, symbol };
    // console.log(str);
    return { name, symbol, balance };
  } catch (error) {
    return "not valid address";
  }
};

exports.isAddress = (address) => {
  return web3.utils.isAddress(address);
};

// getERC20Balance();

// web3.eth.defaultAccount = "0xa145ac099e3d2e9781c9c848249e2e6b256b030d";

// console.log(web3.eth.defaultAccount);
