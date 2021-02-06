const BaseException = require("../common/exceptions/base");

module.exports = async (err, req, res, next) => {
  if (err instanceof BaseException) {
    res.status(err.status || 500).json({
      errorCode: err.code,
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
