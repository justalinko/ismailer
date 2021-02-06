const nodemailer = require("nodemailer");
const logger = require("../common/logger");

module.exports = {
  sendEmail: async (req, res) => {
    const { host, port, secure, user, pass, messages } = req.body;

    let transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const messagSendingPromises = messages.map((message) =>
      transporter.sendMail({
        from: message.from,
        to: message.to,
        subject: message.subject,
        text: message.text,
        html: message.html,
      })
    );

    try {
      await Promise.all(messagSendingPromises);
      res.sendStatus(200);
    } catch (error) {
      logger.nodemailer("Error when sending emails", error);
    }
  },
};
