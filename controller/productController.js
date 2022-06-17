const Product = require('../model/product')
const Favorite = require('../model/favorite')
const errorHandler = require('../utils/errorHandler')

class ProductController {

    async getNewProducts(req, res) {
        try {
            const products = await Product.findAll({
                limit: 18,
                order: [['id', 'DESC']]
            })
            //возращает 18 последних добавленых позиций
            res.status(200).json(products)
        } catch (error) {
            errorHandler(res, error)
        }
    }

    async getAllByGender(req, res) {
        try {
            const products = await Product.findAll({
                where: {
                    gender: req.params.gender
                }
            })
            res.status(200).json(products)
        } catch (error) {
            errorHandler(res, error)
        }
    }

    // у скольких пользователей товар в избранном
    async countFavoriteByProduct(req, res) {
        try {
            const amount = await Favorite.count({
                where: { productId: req.params.productId }
            })
            res.status(200).json(amount)
        } catch (error) {
            errorHandler(res, error)
        }
    }

    async addFavorite(req, res) {
        try {
            const candidate = await Favorite.findOne(
                {
                    where:
                    {
                        userId: Number(req.query.userId),
                        productId: Number(req.query.productId)
                    }
                })
            if (candidate) {
                res.status(401).json({
                    message: 'This product already in favorites'
                })
            } else {
                const favorite = await Favorite.create({
                    userId: Number(req.query.userId),
                    productId: Number(req.query.productId)
                })
                res.status(201).json(favorite)
            }
        } catch (error) {
            errorHandler(res, error)
        }
    }

    async deleteFavorite(req, res) {
        try {
            await Favorite.destroy({ where: { id: req.params.id } })
            res.status(200).json({
                message: 'Fav deleted.'
            })
        } catch (error) {
            errorHandler(res, error)
        }
    }

    //список избранного для конкретного пользователя
    async getFavProductByUser(req, res) {
        try {
            const favs = await Favorite.findAll({
                where: {
                    userId: req.params.userId,
                },
                attributes: {
                    exclude: ['id', 'userId']
                }
            })
            const favProducts = await Promise.all(
                // для каждого элемента массива
                favs.map(
                    async ({ productId }) =>
                        await Product.findOne({
                            where: {
                                id: productId
                            }
                        }))
            )
            res.status(200).json(favProducts)

        } catch (error) {
            errorHandler(res, error)
        }
    }

    async getOneProduct(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (product) {
                res.status(200).json(product)
            } else {
                res.status(404).json({
                    message: 'Product not found'
                })
            }
        } catch (error) {
            errorHandler(res, error)
        }
    }

    async createProduct(req, res) {
        try {
            const product = await Product.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                gender: req.body.gender,
                img: req.body.img,
                size: req.body.size,
                colorId: req.body.colorId,
                categoryId: req.body.categoryId
            })
            res.status(201).json(product)
        } catch (error) {
            errorHandler(res, error)
        }
    }

    // async deleteProduct(req, res) {
    //     try {
    //         await Product.destroy({where: {id: req.params.id}})
    //         res.status(200).json({
    //             message: 'Product successfully uninstalled'
    //         })
    //     } catch (error) {
    //         errorHandler(res, error)
    //     }
    // }

    async deleteProduct(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (product) {
                await Favorite.destroy({
                    where: { userId: req.params.id }
                })
                await Product.destroy({ where: { id: req.params.id } })
                res.status(200).json({
                    message: 'Product removed successfully'
                })
            } else {
                res.status(404).json({
                    message: 'Product not found'
                })
            }
        } catch (error) {
            errorHandler(res, error)
        }
    }

    async updateProducts(req, res) {
        try {
            await Product.update(req.body, {
                where: { id: req.params.id }
            })
            res.status(200).json(
                await Product.findOne({
                    where: { id: req.params.id }
                }))
        } catch (error) {
            errorHandler(res, error)
        }
    }
}

module.exports = new ProductController