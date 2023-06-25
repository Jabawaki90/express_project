const express = require("express");
const PORT = 4000;
const app = express();

app.listen(PORT, () => console.log("running on port 4000"));

app.get("/groceries", (req, res) => {
  res.send([
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
  ]);
});
