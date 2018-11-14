const Home = require('../../../database/models/Home');

const get = (id, callback) => {
  Home.findByPk(id).then((home) => {
    if (!home) {
      callback('no homes found', null);
    }
    const { zipCode } = home;
    Home.findAll({ where: { zipCode } }).then((homes) => {
      if (!homes) {
        callback('no homes found with that ZIP Code', null);
      }
      callback(null, homes);
    });
  });
};

module.exports = {
  get,
};
