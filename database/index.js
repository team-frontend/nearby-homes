const Sequelize = require('sequelize');

const db = new Sequelize('neighborhood', 'root', '1', {
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});

module.exports = db;
