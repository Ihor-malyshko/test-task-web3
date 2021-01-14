// const fs = require("fs");
const axios = require("axios");

const { apiKey } = require("../config");
const uri = `https://api.ethplorer.io/getTop?apiKey=${apiKey}`;

exports.getTopToken = async () => {
  return axios.get(uri).then(({ data }) => {
    const addressContract = data.tokens.map((el) => {
      return { name: el.name, symbol: el.symbol, address: el.address };
    });
    return addressContract;
  });
  // .catch(() => "0xdac17f958d2ee523a2206206994597c13d831ec7");
};
