const { BalanceModel } = require("../model/balance");
const { addressContract } = require("./addressContract");
const { getERC20Balance } = require("./web3-helper");

let timeoutObj = setInterval(setBalances, 1000);

async function setBalances() {
  // console.log("start:", Date.now());
  clearTimeout(timeoutObj);
  const balances = [];
  for (let i = 0; i < global.addressContract.length; i++) {
    const balance = await getERC20Balance(
      global.address,
      global.addressContract[i]
    );
    // console.log(global.addressContract[i]);
    if (balance !== "not valid address") {
      balances.push(balance);
    }
  }
  await BalanceModel.create({ balances: balances, date: Date.now() });
  // console.log("  out:", Date.now());
  timeoutObj = setInterval(setBalances, 60000);
  return balances;
}

exports.setBalances = setBalances;
