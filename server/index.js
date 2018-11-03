const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homes = require('./routes/api/homes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// send index.html when a GET request is sent to '/'
app.use(express.static(path.join(__dirname, '../client/dist')));

// Use Router
app.use('/nearbyHomes', homes);
app.use('/api/homes', homes);

app.use('/increaseLikes', homes);
// homes/increaseLikes
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
