// 🛑 1. الـ Global Error Handler
const errorHandler = (err, req, res, next) => {
    let statusCode = err.status || 500;
    let message = err.message || "Internal Server Error";
    // 💡 لو الخطأ قادم من Mongoose/MongoDB بسبب الاتصال
    if (
      err.name === "MongooseServerSelectionError" ||
      err.message.includes("topology")
    ) {
      statusCode = 503;
      message = "قاعدة البيانات غير متاحة حالياً، جاري صيانة النظام.";
    }

    // لو الخطأ قادم من meilisearch بسبب الاتصال
    if (
      err.name === "MeilisearchRequestError" ||
      err.name === "MeiliSearchCommunicationError" ||
      err.name === "MeiliSearchApiError"
    ) {
      statusCode = 503;
      message = "الخدمة غير متاحة حالياً، حاول مرة أخرى لاحقاً.";
    }
    res.status(statusCode).json({
      success: false,
      message: message,
    });
  };


  module.exports =  errorHandler ;