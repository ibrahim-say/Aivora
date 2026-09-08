
const asyncHandler = require('../../utils/asyncHandler');
const getToolBySlugService = require('../../services/tools/getToolBySlug.service'); 
const getToolBySlug = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;
  const { tool, similarTools } = await getToolBySlugService(slug);
  res.status(200).json({
    success: true,
    message: "Tool found successfully",
    data: {tool, similarTools},
  });
})


  module.exports = getToolBySlug ;

