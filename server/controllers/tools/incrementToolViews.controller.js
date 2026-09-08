const asyncHandler = require("../../utils/asyncHandler");
const AppError = require("../../utils/AppError");

const incrementToolViews = require(
  "../../services/tools/incrementToolViews.service"
);

const incrementToolViewsController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;

    const tool = await incrementToolViews(id);

    if (!tool) {
      throw new AppError(
        "الأداة غير موجودة",
        404
      );
    }

    return res.status(200).json({
      success: true,
      message: "Tool view incremented successfully",
      data: {
        views: tool.views,
      },
    });
  }
);

module.exports = incrementToolViewsController;