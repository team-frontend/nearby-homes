const db = require('../database/postgresdb/index.js');

const retrieve = (id, callback) => {
  const sql = `SELECT * FROM homes where id=${id}`;
  db.query(sql, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const { zipCode } = data[0];
      const queryStr = `SELECT * FROM homes where zipCode=${zipCode}`;
      db.query(queryStr, (error, homes) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, homes);
        }
      });
    }
  });
};

module.exports = {
  retrieve,
};
