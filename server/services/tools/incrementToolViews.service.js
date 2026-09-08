const client = require("../../config/meilisearch");
const Tool = require("../../models/Tool");

const incrementToolViews = async (id) => {
  const tool = await Tool.findByIdAndUpdate(
    id,
    { $inc: { views: 1 } },
    { returnDocument: "after" }
  ).select("views");

  if (!tool) {
    return null;
  }

  await client.index("tools").updateDocuments([
    {
      _id: id,
      views: tool.views,
    },
  ]);

  return tool;
};

module.exports = incrementToolViews;