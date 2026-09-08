const Tool = require("../../models/Tool");
const AppError = require("../../utils/AppError");

const getToolBySlugService = async (slug) => {
  // Get current tool
  const tool = await Tool.findOne({ slug }, "-categories")
    .populate("subCategories");

  if (!tool) {
    throw new AppError("الأداة غير موجودة!", 404);
  }

  // Get subcategory IDs of current tool
  const subCategoryIds = tool.subCategories?.map(
    (subCategory) => subCategory._id
  );

  let similarTools = [];

  
 
  if (subCategoryIds?.length) {
    similarTools = await Tool.aggregate([
      // 1. استبعاد الأداة الحالية
      // وجلب الأدوات التي تشترك في Subcategory واحدة على الأقل
      {
        $match: {
          _id: { $ne: tool._id },
          subCategories: {
            $in: subCategoryIds,
          },
        },
      },
  
      // 2. حساب عدد الـ Subcategories المشتركة
      {
        $addFields: {
          matchCount: {
            $size: {
              $setIntersection: [
                "$subCategories",
                subCategoryIds,
              ],
            },
          },
        },
      },
  
      // 3. ترتيب حسب درجة التشابه
      {
        $sort: {
          matchCount: -1,
          views: -1,
        },
      },
  
      // 4. نجيب 10 أدوات فقط
      {
        $limit: 10,
      },
  
      // 5. نرجع البيانات المطلوبة فقط
      {
        $project: {
          name: 1,
          slug: 1,
          logo: 1,
          screenshot: 1,
          subCategories: 1,
          matchCount: 1,
        },
      },
    ]);
  
    // 6. تحويل Subcategory IDs إلى objects
    await Tool.populate(similarTools, {
      path: "subCategories",
      select: "name slug category",
    });
  }
  
  

  return {
    tool,
    similarTools,
  };
};

module.exports = getToolBySlugService;



