SET NAMES utf8mb4;

CREATE DATABASE meals_sharing;



-- create table meals

CREATE TABLE `meal`(
 `id` int(10) unsigned NOT NULL auto_increment PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description`text NULL default NULL,
 `location` varchar(255) NOT NULL,
 `When` datetime NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` decimal(15,2),
 `created_date` DATE NOT NULL
 );
 
 DROP TABLE meal;
 
 CREATE TABLE `meal`(
 `id` int(10) unsigned NOT NULL auto_increment PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description`text NULL default NULL,
 `location` varchar(255) NOT NULL,
 `When` datetime NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` decimal(15,2),
 `created_date` DATE NOT NULL
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 -- create table reservation
 
 CREATE TABLE `reservation`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL,
 `contact_phonenumber` varchar(255) NOT NULL,
 `contact_name` varchar(255) NOT NULL,
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  -- Adding the new column which was missed in the reservation table
  ALTER TABLE reservation
  ADD COLUMN contact_email varchar(255) NOT NULL;
  
-- create table review  
 CREATE TABLE `review`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `stars` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 -- Insert data into meal table 
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(1, "Biriyani", "Spicy rice with vegetablles","Copenhagen", "2021-04-27 19:00:00", 10, 150, "2021-04-24");
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(2, "Non veg Biriyani", "Spicy rice with mutton or chicken","Copenhagen", "2021-04-27 19:00:00", 15, 150, "2021-04-24 10:00:00");
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(3, "South Indian meals", "Rice with kulambu and poriyal","Copenhagen", "2021-04-27 19:00:00", 15, 120, "2021-04-24 10:00:00");

-- Insert data into Reservation table
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name)
values(1, 5, 1, "2021-04-25 19:00:00", 31243562, "Sanju");
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name)
values(2, 5, 2, "2021-04-25 19:00:00", 38843572, "Shruthi");
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name)
values(3, 5, 3, "2021-04-25 19:00:00", 37246562, "Prashanth");

-- updating data for the new column contact_email from the reservation table which was missed
UPDATE reservation
SET contact_email = "sanjana@gmail.com"
WHERE id = 1;
UPDATE reservation
SET contact_email = "shruthi@gmail.com"
WHERE id = 2;
UPDATE reservation
SET contact_email = "prashanth@gmail.com"
WHERE id = 3;


-- Insert data into review table
INSERT into review (id,title, description, meal_id, stars, created_date)
values(1, "Spicy veg biriyani","Loved the spicy biriyani", 1, 5, "2021-04-28 19:00:00");
INSERT into review (id,title, description, meal_id, stars, created_date)
values(2, "Chicken Biriyani","Chicken biriyani was flavorful", 2, 5, "2021-04-28 19:00:00");
INSERT into review (id,title, description, meal_id, stars, created_date)
values(3, "Delicious south indian meal","Awesome south indian meal", 3, 4, "2021-04-28 19:00:00");

-- queries for meal table
-- get all meals
SELECT *
FROM meal;

-- add a new meal
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(4, "Dosa", "Dosa with chutney","Copenhagen", "2021-04-27 19:00:00", 5, 100, "2021-04-24");
INSERT into meal (id, title, description, location, `when`, max_reservations, price, created_date)
values(5, "Idli", "Idli with chutney","Copenhagen", "2021-04-27 19:00:00", 4, 80, "2021-04-24");

-- get a meal with any id , example 1
SELECT *
FROM meal
WHERE id=1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title="Ghee Dosai",
description = "Ghee dosai with chutney"
WHERE id=4;

-- Delete a meal with any id, fx 1
DELETE
FROM meal
WHERE id=5;

-- queries for reservation table
-- get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name)
values(4, 4, 3, "2021-04-25", 36665512, "subish");
INSERT into reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name)
values(5, 2, 2, "2021-04-25", 35476563, "Moni");

-- updating data for the new column contact_email from the reservation table which was missed
UPDATE reservation
SET contact_email = "subish@gmail.com"
WHERE id = 4;
UPDATE reservation
SET contact_email = "moni@gmail.com"
WHERE id = 5;

-- Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id=1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET contact_name = "krithikaa",
number_of_guests=2
WHERE id=2;

-- Delete a reservation with any id, fx 1
DELETE
FROM reservation
WHERE id=4;

-- queries for review table
-- Get all reviews
SELECT *
FROM review;

-- Add a new review
INSERT into review (id,title, description, meal_id, stars, created_date)
values(4, "Dosai","chutney was not that good", 4, 2, "2021-04-28");
INSERT into review (id,title, description, meal_id, stars, created_date)
values(5, "veg biriyani","Too spicy", 1, 1, "2021-04-28");

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id=2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review 
SET title = "Good biriyani",
stars=5
WHERE id=1;

-- Delete a review with any id, fx 1
DELETE
FROM review
WHERE id=4;

-- functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price<100;

-- Get meals that still has available reservations
SELECT (meal.max_reservations - reservation.number_of_guests), meal.title
FROM reservation
INNER JOIN meal ON reservation.meal_id=meal.id
WHERE max_reservations - number_of_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE title LIKE "%biriyani%";

-- Get meals that has been created between two dates
SELECT meal.title, meal.description, meal.created_date
FROM meal
WHERE created_date BETWEEN "2021-04-23"
AND "2021-04-29";

-- Get only specific number of meals fx return only 5 meals
SELECT meal.title, meal.description
FROM meal
LIMIT 2;

-- Get the meals that have good reviews
SELECT  meal.*, AVG(review.stars) AS Stars_recieved
FROM meal
INNER JOIN review ON meal.id=review.meal_id
WHERE stars > 3
GROUP BY review.meal_id;

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM reservation
INNER JOIN meal ON reservation.meal_id=meal.id
WHERE meal.title="biriyani"
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, meal.description, avg(review.stars)
FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal_id;