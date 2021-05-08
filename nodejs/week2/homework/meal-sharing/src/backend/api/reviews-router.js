const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", (req, res) => {
  res.send(reviews);
});

router.get("/:id", (req, res) => {
  const reviewsId = parseInt(req.params.id);
  if (isNaN(reviewsId)) {
    res.status(400).send("Id must be a number");
    return;
  }
  const reviewsById = reviews.find((review) => review.id === reviewsId);
  if (reviewsById) {
    res.send(reviewsById);
  } else {
    res.status(400).send("Id not found");
  }
});

module.exports = router;
