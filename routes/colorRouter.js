const Router = require('express')
const colorController = require('../controller/colorController')
const passport = require('passport')

const router = new Router()

router.get('/:id', colorController.findOne)
router.get('/', colorController.getAllColors)
router.post('/', passport.authenticate('jwt', { session: false }), colorController.createColor)
router.delete('/:id', passport.authenticate('jwt', { session: false }), colorController.deleteColor)

module.exports = router