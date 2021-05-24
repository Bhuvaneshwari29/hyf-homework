const express = require("express");
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => res.send("nodejs week3 homework"));
app.get("/calculator/add", (req, res) => {
  try {
    const values = Object.values(req.query);
    const sum = values.reduce((acc, val) => Number(acc) + Number(val));
    if (isNaN(sum)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`sum:${sum}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.get("/calculator/subtraction", (req, res) => {
  try {
    const values = Object.values(req.query);
    const difference = values.reduce((acc, val) => Number(acc) - Number(val));
    if (isNaN(difference)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`difference:${difference}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.get("/calculator/multiply", (req, res) => {
  try {
    const values = Object.values(req.query);
    const product = values.reduce((acc, val) => Number(acc) * Number(val));
    if (isNaN(product)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`product:${product}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.get("/calculator/divide", (req, res) => {
  try {
    const values = Object.values(req.query);
    const divide = values.reduce((acc, val) => Number(acc) / Number(val));
    if (isNaN(divide)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`divide:${divide}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.post("/calculator/add", (req, res) => {
  try {
    const values = Object.values(req.body);
    const sum = values.reduce((acc, val) => Number(acc) + Number(val));
    if (isNaN(sum)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`sum:${sum}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.post("/calculator/subtraction", (req, res) => {
  try {
    const values = Object.values(req.body);
    const difference = values.reduce((acc, val) => Number(acc) - Number(val));
    if (isNaN(difference)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`difference:${difference}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.post("/calculator/multiply", (req, res) => {
  try {
    const values = Object.values(req.body);
    const product = values.reduce((acc, val) => Number(acc) * Number(val));
    if (isNaN(product)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`product:${product}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.post("/calculator/divide", (req, res) => {
  try {
    const values = Object.values(req.body);
    const divide = values.reduce((acc, val) => Number(acc) / Number(val));
    if (isNaN(divide)) {
      res.status(404).send("Input value should be integer");
    } else {
      res.send(`divide:${divide}`);
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
