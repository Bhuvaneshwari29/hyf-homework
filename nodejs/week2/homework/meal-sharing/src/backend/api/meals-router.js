const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  let filteredMeals = meals;

  if ("maxPrice" in request.query) {
    const maxPrice = parseFloat(request.query.maxPrice);
    if (isNaN(maxPrice)) {
      response.status(400).send("Data type is not valid");
      return;
    } else {
      filteredMeals = filteredMeals.filter((meal) => meal.price < maxPrice);
    }
  }
  if ("title" in request.query) {
    const title = request.query.title;
    filteredMeals = filteredMeals.filter((meal) => meal.title.includes(title));
  }
  if ("createdAfter" in request.query) {
    const createdAfter = Date.parse(request.query.createdAfter);
    if (isNaN(createdAfter)) {
      response.status(400).send("Data type is not valid");
      return;
    } else {
      filteredMeals = filteredMeals.filter(
        (meal) => Date.parse(meal.createdAt) > createdAfter
      );
    }
  }
  if ("limit" in request.query) {
    const limit = request.query.limit;
    if (isNaN(limit)) {
      response.status(400).send("Data type is not valid");
      return;
    } else {
      filteredMeals = filteredMeals.slice(0, limit);
    }
  }
  try {
    response.send(filteredMeals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

router.get("/:id", async (request, response) => {
  const mealId = parseInt(request.params.id);
  if (isNaN(mealId)) {
    response.status(400).send("Id must be a number");
    return;
  }
  const mealsById = meals.find((meal) => meal.id === mealId);
  if (mealsById) {
    response.send(mealsById);
  } else {
    response.status(400).send("Id not found");
  }
});

module.exports = router;
