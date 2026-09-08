
const client = require("../../config/meilisearch");

const getAllToolsService = async ({
  q = "",
  pricing,
  category,
  subCategory,
  page = 1,
  limit = 20,
  sort,
}) => {
  const index = client.index("tools");

  const filters = [];

  // Pricing
  const pricingMap = {
    "مجاني": 'pricing = "مجاني"',
    "مجاني + مدفوع": 'pricing = "مجاني + مدفوع"',
    "مدفوع": 'pricing = "مدفوع"',
    "تجربة مجانية": 'pricing = "تجربة مجانية"',
    "call": 'pricing = "call"',
  };

  if (pricing && pricingMap[pricing]) {
    filters.push(pricingMap[pricing]);
  }

  // Category
  if (category) {
    filters.push(`categories = "${category}"`);
  }

  // SubCategory
  if (subCategory) {
    filters.push(`subCategories = "${subCategory}"`);
  }

  // Sorting
  const sortArray = [];

  if (sort === "popular") {
    sortArray.push("views:desc");
  }

  if (sort === "latest") {
    sortArray.push("createdAt:desc");
  }

  const result = await index.search(q, {
    filter: filters.length
      ? filters.join(" AND ")
      : undefined,

    sort: sortArray.length
      ? sortArray
      : undefined,

    offset: (page - 1) * limit,

    limit,
  });

  // Return only the fields needed by the frontend
  const tools = result.hits.map((tool) => {
    const {
      content,
      views,
      createdAt,
      updatedAt,
      ...safeTool
    } = tool;

    return safeTool;
  });

  return {
    tools,

    pagination: {
      page: Number(page),
      limit: Number(limit),
      total: result.estimatedTotalHits,
      totalPages: Math.ceil(
        result.estimatedTotalHits / limit
      ),
      hasNextPage:
        Number(page) * limit <
        result.estimatedTotalHits,
    },
  };
};

module.exports = getAllToolsService;

