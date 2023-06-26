const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ashraf:fbVZ4CNqWpKaRjhd@cluster0.lyh43bo.mongodb.net/expressjs_tutorial"
  )
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));
