const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homes = require('./routes/api/homes');

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use('/homes/:id', express.static(path.join(__dirname, '../public/dist')));

app.get('/homes/:id/nearbyHomes', (req, res) => {
  const { id } = req.params;
  homes.get(id, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      res.end(JSON.stringify(data));
    }
  });
});


app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}`);
});
