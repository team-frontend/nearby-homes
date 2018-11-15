const faker = require('faker');
const fs = require('fs');
const json = require('./../zipcode.json');

const wstream = fs.createWriteStream('./../file2.tsv');

const createRandomNum = () => Math.floor(Math.random() * 20) + 1;
const selectRandomPhoto = () => `https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_${createRandomNum()}.jpg`;

const createFakeHomes = function createFakeHomes(i) {
  for (;i <= 10000000; i += 1) {
    const randomVal = faker.random.number({
      min: 0,
      max: 33143,
    });
    const dateOfPosting = faker.date.between('2018-05-01', '2018-10-25');
    const status = faker.random.arrayElement([
      'FOR SALE',
      'FORECLOSURE',
      'AUCTION',
      'OFF MARKET',
      'FOR RENT',
      'SOLD',
    ]);
    const numberOfLikes =  faker.random.number(200);
    const numberOfBathroom =  faker.random.number({
      min: 0,
      max: 4,
    });
    const numberOfBedroom = faker.random.number({
      min: 0,
      max: 10,
    });
    const homeValue = faker.random.number({
      min: 100000,
      max: 4000000,
    });
    const sqft =  faker.random.number({
      min: 300,
      max: 4000,
    });
    const streetName = faker.address.streetAddress();
    const cityName = faker.address.city();
    const stateName = faker.address.state();
    const zipCode = json[randomVal]['zipcode'];
    const latitude = json[randomVal]['latitude'];
    const longitude =  json[randomVal]['longitude'];
    const homeImage = selectRandomPhoto();

    if (!wstream.write(dateOfPosting + '\t' + status + '\t' + numberOfLikes + '\t' + numberOfBathroom + '\t' + numberOfBedroom + '\t' + homeValue + '\t' + sqft + '\t' + streetName + '\t' + cityName + '\t' + stateName + '\t' + zipCode + '\t' + latitude + '\t' + longitude + '\t' + homeImage + '\n')) {
      wstream.once('drain', () => createFakeHomes(i + 1));
      return;
    }
  }
  wstream.end();
};

createFakeHomes(1);