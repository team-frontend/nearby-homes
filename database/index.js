const Sequelize = require('sequelize');

const db = new Sequelize('neighborhood', 'root', '1', {
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
});

module.exports = db;


// const Sequelize = require('sequelize');

// const db = new Sequelize('nearbyHomes', 'skim7', 'gorfldprxj#', {
//   host: 'hr-fcc-nearby-homes.cppzgmwnb7qi.us-east-1.rds.amazonaws.com',
//   dialect: 'mysql',
//   operatorsAliases: false,
//   define: {
//     timestamps: false,
//   },
// });

// module.exports = db;
