const { rateLimit } = require("express-rate-limit");

const toolsListRateLimit = rateLimit({
  windowMs: 60 * 1000, // دقيقة
  limit: 60, // 60 طلب لكل IP في الدقيقة

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "طلبات كثيرة جدًا، حاول مرة أخرى بعد قليل.",
  },
});

const toolDetailsRateLimit = rateLimit({
  windowMs: 60 * 1000, // دقيقة
  limit: 60, // 60 طلب لكل IP في الدقيقة

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    success: false,
    message: "طلبات كثيرة جدًا، حاول مرة أخرى بعد قليل.",
  },
});

module.exports = {
  toolsListRateLimit,
  toolDetailsRateLimit,
};