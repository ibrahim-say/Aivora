const Tool = require("../../models/Tool");
const SubCategory = require("../../models/SubCategory");
const Category = require("../../models/Category");
const AppError = require("../../utils/AppError");

const getCategoryDetailsService = async (slug) => {

  // 1. جلب الكاتيجوري
  const category = await Category.findOne({ slug });
//جلب الكاتيجوريس الفرعيه
const subCategories =await SubCategory.find({ category: category._id });
  if (!category) {
   AppError({
      message: "Category not found",
      statusCode: 404,
    });
  }

  return {
    category,
    subCategories
  };
};

module.exports = getCategoryDetailsService;