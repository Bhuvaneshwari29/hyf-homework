const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal sharing web app");
});

// meals
const mealReviews = meals.map((eachMeal) => {
  eachMeal.reviews = [];
  reviews.filter((review) => {
    if (review.mealId === eachMeal.id) {
      eachMeal.reviews.push(review);
    }
  })
  return eachMeal;
})

app.get("/meals", async (req, res) => {
  res.send(mealReviews);
});

//cheap meals
app.get("/cheap-meals", async (req, res) => {
  let cheapMeals = mealReviews.filter((review) => review.price < 70)
  res.send(cheapMeals);
});

//large meals
app.get("/large-meals", async (req, res) => {
  let largeMeals = mealReviews.filter((customer) => customer.maxNumberOfGuests >= 5)
  res.send(largeMeals);
});

//meal
app.get("/meal", async (req, res) => {
  let randomMeal = mealReviews[Math.floor(Math.random() * mealReviews.length)]
  res.send(randomMeal);
});

//reservations
app.get("/reservations", async (req, res) => {
  res.send(reservations);
});

//random reservation
app.get("/reservation", async (req, res) => {
  let reservation = reservations[Math.floor(Math.random() * reservations.length)]
  res.send(reservation);
});

module.exports = app;
