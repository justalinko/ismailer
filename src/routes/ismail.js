const router = require("express").Router();
const controller = require("../controller/ismail");
const requestValidator = require("../middleware/request-validator");
const { sendMailSchema } = require("../schema/ismail");

router.post("/", requestValidator(sendMailSchema), controller.sendEmail);

module.exports = router;
