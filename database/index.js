const Sequelize = require('sequelize');

const db = new Sequelize('neighborhood', 'root', '', {
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});

module.exports = db;
