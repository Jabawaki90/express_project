const express = require("express");
const router = express.Router();

const store = [
  {
    miles: 1,
    name: "carefour",
    location: "Ampang",
  },

  {
    miles: 2,
    name: "giant",
    location: "Subang",
  },
  {
    miles: 3,
    name: "tesco",
    location: "Pandan Indah",
  },
  {
    miles: 4,
    name: "tesco",
    location: "Pandan Indah",
  },
  {
    miles: 5,
    name: "tesco",
    location: "Pandan Indah",
  },
];

router.get("/", (req, res) => {
  res.status(201).send(store);
});

router.get("/:shop", (req, res) => {
  const { shop } = req.params;
  const singleShop = store.find((g) => g.name == shop);
  res.send(200, singleShop);
});

router.get("", (req, res) => {
  const { miles } = req.query;
  const parseMiles = parseInt(miles);
  if (!isNaN(parseMiles)) {
    const selectedMarket = store.filter((g) => g.miles <= parseMiles);
    res.send(selectedMarket);
  } else {
    res.send(store);
  }
});

module.exports = router;
