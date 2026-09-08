const { getToolsQuerySchema } = require("../../validations/tool.validation");
const AppError = require("../../utils/AppError");

const validateGetToolsQuery = (req, res, next) => {
  const result = getToolsQuerySchema.safeParse(req.query);

  if (!result.success) {
    return next(
      new AppError(
        result.error.issues[0]?.message ||
          "بيانات البحث أو الفلترة غير صالحة",
        400
      )
    );
  }

  req.query = result.data;

  next();
};

module.exports = validateGetToolsQuery;