const asyncHandler = require("../../utils/asyncHandler");
const getCategoryDetailsService = require("../../services/categories/getCategoryDetails.service");

const getCategoryDetails = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;
  const { category,subCategories } = await getCategoryDetailsService(slug);
  res.status(200).json({
    success: true,
    message: "Category found successfully",
    data: { category,subCategories},
  });
})


module.exports = getCategoryDetails;
