const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Tool = require("../models/Tool");
const SubCategory = require("../models/SubCategory");
const client = require("../config/meilisearch");

const syncToolsToMeilisearch = async () => {
  try {
    console.log("🚀 Sync started");

    // =========================
    // Connect MongoDB
    // =========================

    await connectDB();

    console.log("✅ MongoDB connected");

    // =========================
    // Get Meilisearch index
    // =========================

    const index = client.index("tools");

    console.log("✅ Meilisearch client ready");

    // =========================
    // Get tools + populate subCategories
    // =========================

    const tools = await Tool.find(
      {}
    )
      .populate({
        path: "subCategories",
        select: "_id name slug category",
      })
      .lean();

    console.log(`📦 Found ${tools.length} tools`);

    // =========================
    // Prepare documents
    // =========================

    const documents = tools.map((tool) => ({
      ...tool,
    
      _id: tool._id.toString(),
    
      // IDs فقط → للـ filtering
      subCategories:
        tool.subCategories?.map((subCategory) =>
          subCategory._id.toString()
        ) ?? [],
    
      // بيانات كاملة → للـ frontend
      subCategoryData:
        tool.subCategories?.map((subCategory) => ({
          _id: subCategory._id.toString(),
          name: subCategory.name,
          slug: subCategory.slug,
          category: subCategory.category
            ? subCategory.category.toString()
            : null,
        })) ?? [],
    }));

    console.log(
      `📄 Prepared ${documents.length} documents`
    );

    // =========================
    // Delete old documents
    // =========================

    await index.deleteAllDocuments();

    console.log(
      "🗑️ Old Meilisearch documents deleted"
    );

    // =========================
    // Add documents
    // =========================

    if (documents.length > 0) {
      const task = await index.addDocuments(
        documents,
        {
          primaryKey: "_id",
        }
      );

      console.log(
        `📤 Sync task: ${task.taskUid}`
      );
    }

    console.log(
      "✅ Tools synced successfully"
    );

    // =========================
    // Disconnect MongoDB
    // =========================

    await mongoose.disconnect();

    console.log(
      "🔌 MongoDB disconnected"
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "❌ Sync failed:",
      error
    );

    try {
      await mongoose.disconnect();
    } catch {}

    process.exit(1);
  }
};

syncToolsToMeilisearch();