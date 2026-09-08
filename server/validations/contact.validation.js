const { z } = require("zod");

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(100, "الاسم يجب ألا يتجاوز 100 حرف"),

  email: z
    .string()
    .trim()
    .email("يرجى إدخال بريد إلكتروني صحيح")
    .max(254, "البريد الإلكتروني طويل جدًا"),

  subject: z
    .string()
    .trim()
    .min(2, "الموضوع يجب أن يكون حرفين على الأقل")
    .max(150, "الموضوع يجب ألا يتجاوز 150 حرف"),

  message: z
    .string()
    .trim()
    .min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل")
    .max(5000, "الرسالة يجب ألا تتجاوز 5000 حرف"),
});

module.exports = {
  contactSchema,
};