const express = require("express");
const session = require("express-session");
const groceriesRoute = require("./routes/groceries");
const marketRoute = require("./routes/markets");
const authRoute = require("./routes/auth");

require("./database");
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(
  session({
    secret: "sdffgflkfdskljfnlkslkdfj",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketRoute);
app.use("/api/v1/auth", authRoute);

app.listen(PORT, () => console.log("running on port 4000"));
