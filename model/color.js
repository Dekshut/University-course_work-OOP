const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Color = sequelize.define("color", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    hex: {
        type: DataTypes.STRING, 
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    }
})

module.exports = Color