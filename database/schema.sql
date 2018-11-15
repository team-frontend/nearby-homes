CREATE DATABASE IF NOT EXISTS neighborhood;

USE neighborhood;

CREATE TABLE IF NOT EXISTS homes(
     id INT NOT NULL AUTO_INCREMENT,
     dateOfPosting INT NOT NULL,
     numberOfBathroom INT NOT NULL,
     numberOfBedroom INT NOT NULL,
     homeValue INT NOT NULL,
     sqft INT NOT NULL,
     streetName STRING NOT NULL,
     cityName STRING NOT NULL,
     stateName STRING NOT NULL,
     zipCode INT NOT NULL,
     latitude INT NOT NULL,
     longitude INT NOT NULL,
     homeImage STRING NOT NULL,
     PRIMARY KEY (id)
)