const Router = require('express')
const userController = require('../controller/userController')
const {check} = require("express-validator")
const router = new Router() 

router.post('/login', userController.login)
router.post('/register',[
    check('email',"Must be an email").isEmail(),
    check('password',"password lenght must be 4-20").isLength({min: 4, max: 20})
], userController.register)

module.exports = router