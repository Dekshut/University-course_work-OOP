const Color = require('../model/color')
const Product = require('../model/product')
const errorHandler = require('../utils/errorHandler')

class ColorController {

  async createColor(req, res) {
    const candidate = await Color.findOne({ where: { hex: req.body.hex } })
    if (candidate) {
      res.status(409).json({
        message: 'This color already exists'
      })
    } else {
      try {
        const color = await Color.create({
          hex: req.body.hex,
          name: req.body.name
        })
        res.status(201).json(color)
      } catch (error) {
        errorHandler(res, error)
      }
    }
  }

  async deleteColor(req, res) {
    const candidate = await Color.findOne({ where: { id: req.params.id } })
    if (candidate) {
      try {
        await Product.findAll(
          {
            include: [{ model: Color,
            where:{id: req.params.id}}]
        }
        )
        await Color.destroy({
          where: { id: req.params.id }
        })
        res.status(201).json({
          message: 'Color removed successfully'
        })
      } catch (error) {
        errorHandler(res, error)
      }
    } else {
      res.status(404).json({
        message: 'Color not found'
      })
    }
  }

  async findOne(req, res) {
    try {
      const color = await Color.findOne({
        where: { id: req.params.id }
      })
      if (color) {
        res.status(200).json(color)
      } else {
        res.status(404).json({
          message: 'Color not found'
        })
      }
    } catch (error) {
      errorHandler(res, error)
    }
  }

  async getAllColors(req, res) {
    try {
      const color = await Color.findAll()
      res.status(200).json(color)
    } catch (error) {
      errorHandler(res, error)
    }
  }
}

module.exports = new ColorController