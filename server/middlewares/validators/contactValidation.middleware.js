const { contactSchema } = require("../../validations/contact.validation");
const AppError = require("../../utils/AppError");

const validateContact = (req, res, next) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return next(
      new AppError(
        result.error.issues[0]?.message ||
          "بيانات نموذج التواصل غير صحيحة",
        400
      )
    );
  }

  req.body = result.data;

  next();
};

module.exports = validateContact;