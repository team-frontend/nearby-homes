const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
const NearbyHomes = require('../database/NearbyHomes');

app.set('port', 3000);
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
