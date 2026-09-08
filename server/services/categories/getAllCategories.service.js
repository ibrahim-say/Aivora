const Category = require('../../models/Category');

const getAllCategoriesService =async () => {
    const categories = await Category.find();
    return categories;
}

module.exports = getAllCategoriesService