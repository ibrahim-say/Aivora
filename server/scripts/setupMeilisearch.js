const client = require("../config/meilisearch");

const setupMeilisearch = async () => {
  try {
    const index = client.index("tools");

    await index.updateFilterableAttributes([
      "pricing",
      "categories",
      "subCategories",
    ]);

    await index.updateSortableAttributes([
      "views",
      "createdAt",
    ]);

    await index.updateSearchableAttributes([
      "name",
      "description",
      "content",
      "keywords",
      "seoTitle",
      "seoDescription",
    ]);

    console.log("✅ Meilisearch setup completed successfully");
  } catch (error) {
    console.error("❌ Meilisearch setup failed:", error);
  }
};

setupMeilisearch();