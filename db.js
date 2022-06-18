const Pool = require('sequelize')

module.exports = new Pool('catalog', 'postgres', 'adgjlzcbm', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    define: {
        timestamps: false
    }
});