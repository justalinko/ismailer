// Base error for internal app error
class BaseException extends Error {
  constructor(errorCode) {
    super();
    this.status = 500;
    this.code = errorCode || 9999;
    this.message = "The server has encountered an unexpected error";
  }
}

module.exports = BaseException;
