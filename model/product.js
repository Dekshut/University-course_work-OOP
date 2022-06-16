const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Category = require('./category')
const Color = require('./color')

const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false
    },
    title: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    size: {
        type: DataTypes.STRING
    }
})

Color.hasMany(Product)
Product.belongsTo(Color)

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = Product
