const asyncHandler = require('../../utils/asyncHandler');
const getAllCategoriesService = require('../../services/categories/getAllCategories.service');

const getAllCategories = asyncHandler(async (req, res, next) => {

const categories = await getAllCategoriesService();
  res.status(200).json(
    {
        success: true,
        message: categories.length ? "Categories found successfully" : "No Categories found",
        data: {categories},
    }
  );
}) 

module.exports =  getAllCategories ;

