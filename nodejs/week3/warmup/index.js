const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (req, res) => {
 const values = Object.values(req.query).flat()
 const sum = values.reduce((acc, val) => Number(acc) + Number(val))
  res.json({ sum: sum });
});

app.get("/calculator/subtraction", (req, res) => {
  const values = Object.values(req.query).flat()
  const difference = values.reduce((acc,val) => Number(acc) - Number(val))
  res.json({ difference: difference });
});

app.get("/calculator/multiply", (req, res) => {
  const values = Object.values(req.query).flat()
  const product = values.reduce((acc,val) => Number(acc) * Number(val))
  res.json({ product: product });
});

app.get("/calculator/divide", (req, res) => {
  const values = Object.values(req.query).flat()
 const sum = values.reduce((acc, val) => Number(acc) / Number(val))
  res.json({ dividend: dividend });
});

app.post("/calculator/add", (req, res) => {
  const values = Object.values(req.body).flat()
    const sum = values.reduce((acc, val) => Number(acc) + Number(val))
  res.json({ sum: sum });
});

app.post("/calculator/subtraction", (req, res) => {
  const values = Object.values(req,body).flat()
  const difference = values.reduce((acc,val) => Number(acc) - Number(val))
  res.json({ difference: difference });
});

app.post("/calculator/multiply", (req, res) => {
  const values = Object.values(req,body).flat()
  const product = values.reduce((acc,val) => Number(acc) * Number(val))
  res.json({ product: product });
});

app.post("/calculator/divide", (req, res) => {
  const values = Object.values(req.body).flat()
    const sum = values.reduce((acc, val) => Number(acc) / Number(val))
  res.json({ dividend: dividend });
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
