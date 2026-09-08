const Tool = require("../../models/Tool");
const SubCategory = require("../../models/SubCategory");
const AppError = require("../../utils/AppError");

const getSubCategoryDetailsService = async (slug) => {

  // 1. جلب الكاتيجوري
  const subCategory = await SubCategory.findOne({ slug }).populate("category");

  if (!subCategory) {
   AppError({
      message: "subCategory not found",
      statusCode: 404,
    });
  }

  return {
    subCategory
   
  };
};

module.exports = getSubCategoryDetailsService;