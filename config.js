const userMongoDB = "test-user";
const password = "vT2GtFnLgfFMn5g";
const linkBase = `mongodb+srv://${userMongoDB}:${password}@cluster0.hsmgv.mongodb.net/ether?retryWrites=true&w=majority`;
const port = 5000;
const apiKey = "EK-g9qTc-JLqBA5d-qSEQU";

module.exports = { userMongoDB, linkBase, port, apiKey };
