const joi = require("joi");

const sendMailSchema = {
  body: joi
    .object({
      host: joi.string().required(),
      port: joi.number().required(),
      secure: joi.boolean().required(),
      user: joi.string().required(),
      pass: joi.string().required(),
      messages: joi
        .array()
        .items(
          joi.object({
            from: joi.string().required(),
            to: joi.string().required(),
            subject: joi.string().required(),
            text: joi.string().required(),
            html: joi.string().required(),
          })
        )
        .required(),
    })
    .required(),
};

module.exports = {
  sendMailSchema,
};
