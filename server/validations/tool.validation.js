const { z } = require("zod");

const getToolsQuerySchema = z.object({
  q: z
    .string()
    .trim()
    .max(100, "البحث يجب ألا يتجاوز 100 حرف")
    .optional(),

    pricing: z
    .enum(
      ["مجاني", "مجاني + مدفوع", "مدفوع", "تجربة مجانية", "call"],
      {
        message: "نوع السعر غير صالح",
      }
    )
    .optional(),

  category: z
    .string()
    .trim()
    .max(100, "القسم غير صالح")
    .optional(),

  subCategory: z
    .string()
    .trim()
    .max(100, "القسم الفرعي غير صالح")
    .optional(),

  page: z.coerce
    .number()
    .int()
    .min(1, "رقم الصفحة يجب أن يكون 1 أو أكثر")
    .optional(),

  limit: z.coerce
    .number()
    .int()
    .min(1, "الحد الأدنى لعدد الأدوات هو 1")
    .max(20, "لا يمكن طلب أكثر من 20 أداة")
    .optional(),

  sort: z
    .enum(["popular", "latest"], {
      message: "نوع الترتيب غير صالح",
    })
    .optional(),
});

module.exports = {
  getToolsQuerySchema,
};