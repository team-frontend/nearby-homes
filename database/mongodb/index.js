const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:student@localhost:27017/neighborhood?authSource=admin');

const homeSchema = mongoose.Schema({
  id: Number,
  name: String,
  datetime: Date,
  status: String,
  likes: Number,
  bathrooms: Number,
  bedrooms: Number,
  price: Number,
  sqft: Number,
  street: String,
  city: String,
  state: String,
  zipCode: Number,
  latitude: Number,
  longitude: Number,
  image: String,
});

homeSchema.index({ id: 1, name: 1 });
const Homes = mongoose.model('Homes', homeSchema);

//mongoimport -u admin -p --db neighborhood --collection homes --type tsv --file file6.tsv --fields _id, name, datetime, status, likes, bathrooms, bedrooms, price, sqft, street, city, state, zipCode, latitude, longitude, image
