const SubCategory = require('../../models/SubCategory');

const getAllSubCategoriesService =async () => {
    const subCategories = await SubCategory.find().populate('category');
    return subCategories;
}

module.exports = getAllSubCategoriesService