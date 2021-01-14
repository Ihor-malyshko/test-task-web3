// const path = require("path");
// require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
// const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { router } = require("./router/router");

const Config = require("./config");
const { initAddress, initAddressContract } = require("./helpers/initGlobal");
const { setBalances } = require("./helpers/setBalances");

exports.CrudServer = class {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    await this.initDatabase();
    await this.initGlobalVariable();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  async initDatabase() {
    try {
      await mongoose.connect(Config.linkBase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }

  async initGlobalVariable() {
    await initAddress();
    await initAddressContract();
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(morgan("tiny"));
  }

  initRoutes() {
    this.server.use("/", router);

    this.server.use("/api/*", (req, res) => {
      res.status(404).send("This api not found.");
    });
  }

  initErrorHandling() {
    this.server.use((err, req, res, next) => {
      const statusCode = err.status || 500;
      return res.status(statusCode).send(err.message);
    });
  }

  startListening() {
    const PORT = Config.port;
    this.server.listen(PORT, () => {
      console.log("Server started listening on port", PORT);
      setBalances();
      // myInterval();
    });
  }
};
