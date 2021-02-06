const winston = require("winston");

class Logger {
  constructor(loggingPath) {
    const customLevels = {
      levels: {
        nodemailer: 0,
        error: 1,
        info: 2,
        debug: 3,
      },
    };
    this._winston = winston.createLogger({
      levels: customLevels.levels,
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: loggingPath,
          level: "nodemailer",
        }),
      ],
    });
  }

  /**
   *
   * @param {string} message
   * @param {object} meta
   */
  debug(message, meta) {
    this._winston.log("debug", message, meta);
  }

  /**
   *
   * @param {string} message
   * @param {object} meta
   */
  info(message, meta) {
    this._winston.log("info", message, meta);
  }

  /**
   *
   * @param {string} message
   * @param {object} meta
   */
  fatal(message, meta) {
    this._winston.log("error", message, meta);
  }

  /**
   *
   * @param {string} message
   * @param {object} meta
   */
  nodemailer(message, meta) {
    this._winston.log("nodemailer", message, meta);
  }
}

module.exports = new Logger("./log/error.log");
