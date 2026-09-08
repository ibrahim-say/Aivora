const express = require('express');
const router = express.Router();
const  getAllTools = require('../../controllers/tools/getAllTools.controller');
const getToolBySlug = require('../../controllers/tools/getToolBySlug.controller');
const validateGetToolsQuery = require("../../middlewares/validators/getToolsQuery.middleware");
const {
  toolsListRateLimit,
  toolDetailsRateLimit,
} = require(
  "../../middlewares/rateLimiters/toolsRateLimit.middleware"
);
const incrementToolViews = require(
  "../../controllers/tools/incrementToolViews.controller"
);
const getToolsForSitemap = require(
  "../../controllers/tools/getToolsForSitemap.controller"
);
const internalAuth = require("../../middlewares/auth/internalAuth.middleware");
router.get(
  "/sitemap",
  internalAuth,
  getToolsForSitemap
);
router.get(
    "/",
    toolsListRateLimit,
    validateGetToolsQuery,
    getAllTools
  );
router.post("/:id/view", incrementToolViews);
router.get('/:slug',toolDetailsRateLimit, getToolBySlug);



module.exports = router;