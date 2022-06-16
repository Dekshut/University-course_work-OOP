const Router = require('express')
const userController = require('../controller/userController')
const {check} = require("express-validator")
const router = new Router() 

router.post('/login', userController.login)
router.post('/register',[
    check('email').isEmail(),
    check('password').isLength({min: 4, max: 20})
], userController.register)

module.exports = router