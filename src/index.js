const express = require("express");
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quantity: 1,
  },
  {
    item: "pop-tarts",
    quantity: 1,
  },
];

app.listen(PORT, () => console.log("running on port 4000"));

app.get("/groceries", (req, res) => {
  res.send(groceryList);
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});
