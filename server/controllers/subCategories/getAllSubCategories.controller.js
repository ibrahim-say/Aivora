const asyncHandler = require('../../utils/asyncHandler');
const getAllSubCategoriesService = require('../../services/subCategories/getAllSubCategories.service');
const getAllCategories = asyncHandler(async (req, res, next) => {
    const subCategories = await getAllSubCategoriesService();
    res.status(200).json(
        {
            success: true,
            message: subCategories.length ? "SubCategories found successfully" : "No SubCategories found",
            data: {subCategories},
        }
    );
})
module.exports = getAllCategories