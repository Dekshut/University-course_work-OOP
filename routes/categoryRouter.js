const Router = require('express')
const categoryController = require('../controller/categoryController')
const passport = require('passport')

const router = new Router() 

router.get('/', passport.authenticate('jwt', {session: false}), categoryController.getAllCategories)

module.exports = router 