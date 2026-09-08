const asyncHandler = require("../../utils/asyncHandler");
const getSubCategoryDetailsService = require("../../services/subCategories/getSubCategoryDetails.service");
const getSubCategoryDetails = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;
const {subCategory} = await getSubCategoryDetailsService(slug);
  res.status(200).json({
    success: true,
    message: "subCategory found successfully",
    data:{subCategory},
  });
})


module.exports = getSubCategoryDetails;
