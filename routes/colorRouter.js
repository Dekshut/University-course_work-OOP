const Router = require('express')
const colorController = require('../controller/colorController')
const {check} = require("express-validator")

const router = new Router() 

router.get('/:id', colorController.findOne)
router.get('/', colorController.getAllColors)
router.post('/', colorController.createColor)
router.delete('/:id', colorController.deleteColor)

module.exports = router