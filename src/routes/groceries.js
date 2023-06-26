const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  Response.cookie("visited", true, {
    maxAge: 10000,
  });
  res.send(groceryList);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const sku = groceryList.find((g) => g.item == item);
  console.log(sku);
  res.send(200, sku);
});

router.post("/", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});

router.get("/cart", (req, res) => {});
router.post("/cart/item", (req, res) => {
  const { item, quantity } = req.body;
  const cartItem = { item, quantity };
  console.log(cartItem);
  console.log(req.session);
  res.send(req.session);
});

module.exports = router;
