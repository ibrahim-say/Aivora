
const asyncHandler = require("../../utils/asyncHandler");
const getAllToolsService = require("../../services/tools/getAllTools.service");


const getAllTools = asyncHandler(async (req, res, next) => {

  const {
    page = 1,
    limit = 20,
    category,
    subCategory,
    sort,
    pricing,
    q
  } = req.query;


  const result = await getAllToolsService({
    page: Number(page),
    limit: Number(limit),
    category,
    subCategory,
    sort,
    pricing,
    q
  });



  res.status(200).json({
    success: true,
    message: result.tools.length
      ? "Tools found successfully"
      : "No tools found",

    data: result,
  });

});


module.exports = getAllTools;
