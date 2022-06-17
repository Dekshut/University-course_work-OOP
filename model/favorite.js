const Product = require('./product')
const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Favorite = sequelize.define("favorite", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

module.exports = Favorite