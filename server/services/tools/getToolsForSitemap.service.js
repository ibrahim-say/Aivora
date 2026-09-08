const Tool = require("../../models/Tool");

const getToolsForSitemap = async () => {
  const tools = await Tool.find(
    {},
    { slug: 1, _id: 0 }
  ).lean();

  return tools;
};

module.exports = getToolsForSitemap;