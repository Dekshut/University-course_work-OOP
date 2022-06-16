const Category = require('../model/category')

class CategoryController{
    async getAllCategories(req, res) {
        const category = await Category.findAll()
        res.json(category)
    }
}

module.exports = new CategoryController