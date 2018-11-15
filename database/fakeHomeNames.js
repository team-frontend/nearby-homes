const faker = require('faker');
const fs = require('fs');

const wstream = fs.createWriteStream('./../file1.tsv');

const fakeDataGenerator = (i) => {
  for (; i <= 100; i++) {
    const streetName = faker.address.streetName().split(' ').join('-');
    let homeName = `${i}-${streetName}`;
    if (!wstream.write(homeName + '\n')) {
      wstream.once('drain' , () => fakeDataGenerator(i + 1));
      return;
    }
  }
  wstream.end();
};

fakeDataGenerator(1);
