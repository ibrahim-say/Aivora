const rateLimit = require("express-rate-limit");

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,

  limit: 5,

  standardHeaders: "draft-8",

  legacyHeaders: false,

  message: {
    success: false,
    message: "تم تجاوز عدد المحاولات المسموح بها، يرجى المحاولة مرة أخرى لاحقًا."
  },
});

module.exports = contactRateLimit;