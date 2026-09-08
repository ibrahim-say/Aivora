const express = require("express");

const {
  sendContactMessage,
} = require("../../controllers/contact/contact.controller");

const validateContact = require(
  "../../middlewares/validators/contactValidation.middleware"
);

const contactRateLimit = require(
  "../../middlewares/rateLimiters/contactRateLimit.middleware"
);

const router = express.Router();

router.post(
  "/",
  contactRateLimit,
  validateContact,
  sendContactMessage
);

module.exports = router;