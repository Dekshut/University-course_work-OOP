const Router = require('express')

const colorRouter = require('./colorRouter')
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

const router = new Router()

router.use('/color', colorRouter)
router.use('/category', categoryRouter)
router.use('/user', userRouter)
router.use('/product', productRouter)

module.exports = router