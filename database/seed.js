const faker = require('faker');
// const path = require('path');
// const fs = require('fs');
const homes = require('./models/Home');

// const homesPath = path.join(__dirname, '../client/dist/public/assets/images/homes/');
// const homeImages = fs.readdirSync(homesPath);
// console.log('homeimage', homeImages)
// const homeImages = fs.readdirSync(Root);
// console.log('HELLO WORLD', path.join(__dirname, '../public/assets/images/homes'));
const fakeHomes = [];
const rockvilleZipCodes = [
  20847,
  20848,
  20849,
  20850,
  20851,
  20852,
  20853,
  20854,
  20857,
  20877,
];

const selectRandomElement = (array) => {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
};
// console.log(homeImages)

const createFakeHomes = function createFakeHomes() {
  for (let i = 0; i < 100; i += 1) {
    const home = {
      dateOfPosting: faker.date.between('2018-05-01', '2018-10-25'),
      status: faker.random.arrayElement([
        'FOR SALE',
        'FORECLOSURE',
        'AUCTION',
        'OFF MARKET',
        'FOR RENT',
        'SOLD',
      ]),
      numberOfLikes: faker.random.number(200),
      numberOfBathroom: faker.random.number({
        min: 0,
        max: 4,
      }),
      numberOfBedroom: faker.random.number({
        min: 0,
        max: 10,
      }),
      homeValue: faker.random.number({
        min: 100000,
        max: 4000000,
      }),
      sqft: faker.random.number({
        min: 300,
        max: 4000,
      }),
      streetName: faker.address.streetAddress(),
      cityName: 'Rockville',
      stateName: 'MD',
      zipCode: selectRandomElement(rockvilleZipCodes),
      // homeImage: `${homesPath}${selectRandomElement(homeImages)}`,
    };
    fakeHomes.push(home);
  }
};

const seed = () =>
  homes.sync({ force: true }).then(() => {
    createFakeHomes();
    homes.bulkCreate(fakeHomes);
  });

seed();
