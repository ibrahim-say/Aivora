const express = require('express');
const router = express.Router();
const  getAllCategories = require('../../controllers/categories/getAllCategories.controller');
const  getCategoryDetails = require('../../controllers/categories/getCategoryDetails.controller');

//مسارات ال categoriesS
router.get('', getAllCategories);
router.get('/:slug', getCategoryDetails);

module.exports = router;

