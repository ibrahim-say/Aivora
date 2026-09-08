const internalAuth = (req, res, next) => {
    const secret = req.headers["x-internal-secret"];
  
    if (
      !secret ||
      secret !== process.env.BACKEND_INTERNAL_SECRET
    ) {
      
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }
  
    next();
  };
  
  module.exports = internalAuth;