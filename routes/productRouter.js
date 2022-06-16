const Router = require('express')
const productController = require('../controller/productController')

const router = new Router() 

router.get('/', productController.getNewProducts)
router.get('/for/:gender', productController.getAllByGender)
router.get('/:id', productController.getOneProduct)
router.get('/fav/:userId', productController.getFavProductByUser)
router.get('/count/:productId', productController.countFavoriteByProduct)

router.patch('/:id', productController.updateProducts)
router.post('/', productController.createProduct)
router.delete('/:id', productController.deleteProduct)

router.post('/fav', productController.addFavorite)
router.delete('/fav/:id', productController.deleteFavorite)

module.exports = router