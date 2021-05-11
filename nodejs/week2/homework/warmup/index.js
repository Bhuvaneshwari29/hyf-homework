const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    const sum = firstNumber + secondNumber;
    res.send(`${sum}`);
  } else {
    res.status(400).send("Not a number");
  }
});
app.get("/numbers/multiply/:first/:second", (req, res) => {
  const firstNumber = parseInt(req.params.first);
  const secondNumber = parseInt(req.params.second);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    const multiplication = firstNumber * secondNumber;
    res.send(`${multiplication}`);
  } else {
    res.status(400).send("Not a number");
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
