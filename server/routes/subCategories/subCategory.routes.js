const express = require('express');
const router = express.Router();
const  getAllSubCategories = require('../../controllers/subCategories/getAllSubCategories.controller');
const  getSubCategoryDetails = require('../../controllers/subCategories/getSubCategoryDetails.controller');

//مسارات ال subCategoriesS
router.get('', getAllSubCategories);
router.get('/:slug', getSubCategoryDetails);

module.exports = router;

