const express = require("express");
const bodyParser = require("body-parser");
const groceriesRoute = require("./routes/groceries");
const marketRoute = require("./routes/markets");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketRoute);

app.listen(PORT, () => console.log("running on port 4000"));
