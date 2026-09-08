const asyncHandler = require("../../utils/asyncHandler");

const getToolsForSitemap = require(
  "../../services/tools/getToolsForSitemap.service"
);

const getToolsForSitemapController = asyncHandler(
  async (req, res) => {
    const tools = await getToolsForSitemap();

    return res.status(200).json({
    success: true,
    message: "Tools found successfully",
    data: {tools},
    });
  }
);

module.exports = getToolsForSitemapController;