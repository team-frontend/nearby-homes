const faker = require('faker');
const NearbyHomes = require('./NearbyHomes');

const fakeHomes = [];
const createFakeHomes = function createFakeHomes() {
  for (let i = 0; i < 100; i += 1) {
    const homes = {
      dateOfPosting: faker.date.between('2018-05-01', '2018-10-25'),
      status: faker.random.arrayElement(['FOR SALE', 'FORECLOSURE', 'AUCTION', 'OFF MARKET', 'FOR RENT', 'SOLD']),
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
      cityName: faker.address.city(),
      stateName: faker.address.stateAbbr(),
      zipCode: faker.address.zipCode('#####-###'),
    };
    fakeHomes.push(homes);
  }
};

createFakeHomes();

const seed = () => NearbyHomes.bulkCreate(fakeHomes);
seed().then(() => process.exit());
