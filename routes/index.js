const Router = require('express')

const colorRouter = require('./colorRouter')
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const emailSend = require('../controller/emailSend')

const router = new Router()

router.use('/color', colorRouter)
router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/product', productRouter)
router.post('/email', emailSend)

module.exports = router