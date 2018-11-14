# Project Name

> Project description

## Related Projects

  - https://github.com/team-frontend/image-carousel
  - https://github.com/team-frontend/detailed-part
  - https://github.com/team-frontend/mortgage-calculator

## Table of Contents

1. [Usage](#Usage)
2. [Getting Started](#getting-started)
3. [Requirements](#requirements)
4. [Development](#development)
5. [API Endpoints](#api)


## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MySQL 5.7.23

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
Create the database `neighborhood` by executing this file from the command line by typing:

```sh
mysql -u root < database/schema.sql 
```

Start the server with:
```sh
npm start
```

Start your application with:
```sh
npm run dev
```

## Running Tests

This project is [Jest](https://mochajs.org) and [Enzyme](https://airbnb.io/enzyme/) based test You can run them by `npm run test:watch`

## API Documentation

##### Public End Points
| Description                                                        | Endpoint                           |
| ------------------------------------------------------------------ | ---------------------------------- |
| [Get Info of Nearby Homes]                                         | GET /homes/:id/nearbyHomes         |
| [POST Info of Nearby Home]                                         | POST /homes                        |
| [UPDATE Info of Nearby Home]                                       | PATCH  /homes/:id/nearbyHomes      |                      |
| [DELETE Info of Nearby Home]                                       | DELETE /homes/:id/nearbyHomes      |

## GET /homes/:id/nearbyHomes

Input : 4
Output: [
          {
            "id": 2,
            "dateOfPosting": "2018-09-19 16:13:56",
            "status": "FOR SALE",
            "numberOfLikes": 136,
            "numberOfBathroom": 2,
            "numberOfBedroom": 0,
            "homeValue": 3145790,
            "sqft": 3825,
            "streetName": "35228 Sanford Mission",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
          },
          {
            "id": 4,
            "dateOfPosting": "2018-10-18 01:55:34",
            "status": "FORECLOSURE",
            "numberOfLikes": 189,
            "numberOfBathroom": 3,
            "numberOfBedroom": 5,
            "homeValue": 3484208,
            "sqft": 1859,
            "streetName": "980 Aubrey Shore",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_3.jpg"
          }
         ]

## POST /homes

Input :
        {
            "id": 2,
            "dateOfPosting": "2018-09-19 16:13:56",
            "status": "FOR SALE",
            "numberOfLikes": 136,
            "numberOfBathroom": 2,
            "numberOfBedroom": 0,
            "homeValue": 3145790,
            "sqft": 3825,
            "streetName": "35228 Sanford Mission",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
        }
Output:
        {
            "id": 2,
            "dateOfPosting": "2018-09-19 16:13:56",
            "status": "FOR SALE",
            "numberOfLikes": 136,
            "numberOfBathroom": 2,
            "numberOfBedroom": 0,
            "homeValue": 3145790,
            "sqft": 3825,
            "streetName": "35228 Sanford Mission",
            "cityName": "Rockville",
            "stateName": "MD",
            "zipCode": "20851",
            "homeImage": "https://s3-us-west-1.amazonaws.com/fcc-nearby-homes/assets/images/home_1.jpg"
        }

## PATCH  /homes/:id/nearbyHomes

Input :
        {
            "numberOfBedroom": 2,
        }

Output: success

## DELETE  /homes/:id/nearbyHomes

Output: success

Requests home's nearby homes information upon accessing from Zillow's designated endpoint

### Example Request

### Example Response



