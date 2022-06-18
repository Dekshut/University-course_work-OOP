const Pool = require('sequelize')

module.exports = new Pool('catalog', 'postgres', '123tnt2003', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    define: {
        timestamps: false
      }
  });