const Router = require('express')
const categoryController = require('../controller/categoryController')

const router = new Router() 

router.get('/', categoryController.getAllCategories)

module.exports = router 