const asyncHandler = require("../../utils/asyncHandler");

const sendContactEmail = require("../../services/contact/sendContactEmail.service");

const sendContactMessage = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    res.status(400);
    throw new Error("All fields are required");
  }

  await sendContactEmail({
    name,
    email,
    subject,
    message,
  });

  res.status(200).json({
    success: true,
    message: "تم ارسال رسالتك بنجاح.",
  });
});

module.exports = {
  sendContactMessage,
};