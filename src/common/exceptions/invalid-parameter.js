const { ERROR_CODE } = require("../constant");
const BaseException = require("./base");

class InvalidParameterException extends BaseException {
  constructor(message) {
    super(ERROR_CODE.INVALID_PARAMETER);
    this.message = message;
    this.status = 400;
  }
}

module.exports = InvalidParameterException;
