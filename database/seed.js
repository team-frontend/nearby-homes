const faker = require('faker');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const homes = require('./models/Home');


const rockvilleZipCodes = [20847, 20848, 20849, 20850, 20851,
  20852, 20853, 20854, 20857, 20877];

const streetNames = new Set();
faker.seed(123);
while (streetNames.size < 1000) {
  streetNames.add(faker.address.streetName());
}

const streetArray = Array.from(streetNames);

const selectRandomElement = (array) => {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
};

const columnNames = ['id', 'address', 'dateOfPosting', 'status',
  'numberOfLikes', 'numberOfBathroom', 'numberOfBedroom',
  'homeValue', 'sqft', 'streetName', 'cityName', 'stateName',
  'zipCode', 'homeImage'];
// const createRandomNum = () => Math.floor(Math.random() * 20) + 1;

// const selectRandomPhoto = () => `https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_${createRandomNum()}.jpg`;
// Need to refactor this ^
const createFakeHomes = function createFakeHomes() {
  for (let j = 0; j < 10; j += 1) {
    const fakeHomes = [];
    for (let i = 1; i <= 10; i += 1) {
      console.log(j); 
      const home = {
        address: `${i} ${streetArray[j]}`,
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
        homeImage: 'hi',
      };
      fakeHomes.push(home);
    }
    const parser = new Json2csvParser(columnNames);
    const csv = parser.parse(fakeHomes);
    fs.appendFileSync('./data.csv', '/n'+csv);
  }
};

createFakeHomes();

