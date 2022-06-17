const Router = require('express')
const passport = require('passport')
const productController = require('../controller/productController')

const router = new Router() 

router.get('/', productController.getNewProducts)
router.get('/for/:gender', productController.getAllByGender)
router.get('/:id', productController.getOneProduct)
router.get('/fav/:userId', productController.getFavProductByUser)
router.get('/count/:productId', productController.countFavoriteByProduct)

//присутствует middleware для проверки авторизации и роли
router.patch('/:id', passport.authenticate('jwt', {session: false}), productController.updateProducts)
router.post('/', passport.authenticate('jwt', {session: false}), productController.createProduct)
router.delete('/:id', passport.authenticate('jwt', {session: false}), productController.deleteProduct)

router.post('/fav', productController.addFavorite)
router.delete('/fav/:id', productController.deleteFavorite)

module.exports = router