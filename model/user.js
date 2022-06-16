const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Product = require('./product')
const Favorite = require('./favorite')

const User = sequelize.define('user', {
	id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
	email: { 
        type: DataTypes.STRING, 
        unique: true 
    },
	password: { 
        type: DataTypes.STRING 
    },
	isAdmin: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: 'false' }
})

User.belongsToMany(Product, {through: Favorite});
Product.belongsToMany(User, {through: Favorite});

module.exports = User