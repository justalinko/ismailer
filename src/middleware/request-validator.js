const InvalidParameterException = require("../common/exceptions/invalid-parameter");

module.exports = (schema) => {
  return async (req, res, next) => {
    if (schema.body) {
      // body validation
      const { error, value } = schema.body.validate(req.body, { allowUnknown: false });
      if (error) {
        next(new InvalidParameterException(`Invalid body params: ${error.message}`));
      }

      req.body = value;
    }

    if (schema.query) {
      // query validation
      const { error, value } = schema.query.validate(req.query, { allowUnknown: false });
      if (error) {
        next(new InvalidParameterException(`Invalid query params: ${error.message}`));
      }

      req.query = value;
    }

    if (schema.header) {
      // body validation
      const { error, value } = schema.header.validate(req.header, { allowUnknown: false });
      if (error) {
        next(new InvalidParameterException(`Invalid header params: ${error.message}`));
      }

      req.header = value;
    }

    next();
  };
};
