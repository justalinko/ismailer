const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const requestLogger = require("morgan");
const errorHandlerMiddleware = require("./middleware/error-handler");
const ismailRouter = require("./routes/ismail");
const indexRouter = require("./routes/index");
const { createServer } = require("http");
const env = require("./common/env");
const logger = require("./common/logger");

class App {
  static launch() {
    this.express = express();
    this.__registerCommonMiddlewares();
    this.__registerRoutes();
    this.__registerPostMiddleware();

    const port = env.port;
    this.__server = createServer(this.express);
    this.__server.listen(port, () => {
      logger.info(`Server listened on port ${port}`);
    });
  }

  // declare private properties with __ prefix
  static __registerCommonMiddlewares() {
    // view engine setup
    this.express.set("views", path.join(__dirname, "views"));
    this.express.set("view engine", "ejs");

    this.express.use(requestLogger("dev"));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(express.static(path.join(__dirname, "public")));
  }

  static __registerRoutes() {
    this.express.use("/", indexRouter);
    this.express.use("/ismail", ismailRouter);
  }

  static __registerPostMiddleware() {
    this.express.use(function (req, res, next) {
      console.log("not found");
      next(createError(404));
    });

    this.express.use(errorHandlerMiddleware);
  }
}

App.launch();

module.exports = App;
