const Sequelize = require('sequelize');

const db = new Sequelize('neighborhood', 'root', 'student', {
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});

module.exports = db;
