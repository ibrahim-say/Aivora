const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

const Tool = require("../../server/models/Tool");

async function seedCategories() {
  try {
    // الاتصال بالداتا بيز
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // قراءة ملف JSON
    const tools = JSON.parse(
      fs.readFileSync(__dirname + "/tools.json", "utf8")
    );

    // حذف البيانات القديمة (اختياري)
    await Tool.deleteMany();
    const map = new Map();
    let sameSlug =[];

    for (const tool of tools) {
      const key = tool.slug
      .trim()
      .toLowerCase() ; // أو slug
    
      if (!map.has(key)) {
        map.set(key, {
          ...tool,
          slug: key,
          categories: [tool.category],
          subCategories: [tool.subcategory],
        });
        delete map.get(key).category;
        delete map.get(key).subcategory;
    
      } else {
        const existing = map.get(key);
        sameSlug.push(tool.slug);
    
        if (!existing.categories.includes(tool.category)) {
          existing.categories.push(tool.category);
        }
    
        if (!existing.subCategories.includes(tool.subcategory)) {
          existing.subCategories.push(tool.subcategory);
        }
      }
    }
    
    const uniqueTools = [...map.values()];
    console.log("uniqueTools.length:", uniqueTools.length);
    
    console.log("sameSlug.length", sameSlug.length);
    
    // إضافة البيانات
    await Tool.insertMany(uniqueTools);
    console.log(`✅ ${uniqueTools.length} categories inserted successfully`);
    

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedCategories();